"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Film, Person } from "@/types";
import { getFilmById, getAllPeople } from "@/services/api";
import PersonCard from "@/components/PersonCard";
import Image from "next/image";
import Link from "next/link";

export default function FilmDetail() {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<Film | null>(null);
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const filmData = await getFilmById(id);
        const allPeople = await getAllPeople();
        const filmPeople = allPeople.filter((person) =>
          person.films.some((filmUrl) => filmUrl.includes(id))
        );
        setFilm(filmData);
        setPeople(filmPeople);
      } catch (err) {
        setError("No se pudo cargar la película");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-gray-500 font-medium text-lg">
        Cargando película...
      </p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-gray-900 font-bold text-xl">{error}</p>
    </div>
  );

  if (!film) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-gray-900 font-bold text-xl">Película no encontrada</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-900 
         font-medium mb-8" > - Volver
        </Link>

        <div className="relative w-full h-120 rounded-2xl overflow-hidden mb-10">
          <Image
            src={film.movie_banner}
            alt={film.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-black text-gray-800 mb-2">
              {film.title}
            </h1>
            <p className="text-gray-700 font-medium mb-2">
              {film.original_title}
            </p>
            <p className="text-gray-600 leading-relaxed">{film.description}</p>
          </div>

          <div className="">
            <div>
              <p className=" text-gray-900 text-xs font-bold uppercase mb-2">
                Director
              </p>
              <p className="text-yellow-400 text-xs font-semibold mb-2">{film.director}</p>
            </div>
            <div>
              <p className="text-gray-900 text-xs font-bold uppercase mb-2">
                Productor
              </p>
              <p className="text-yellow-400 text-xs font-semibold mb-2">{film.producer}</p>
            </div>
            <div>
              <p className="text-gray-900 text-xs font-bold uppercase mb-2">
                Año
              </p>
              <p className="text-yellow-400 text-xs font-semibold mb-2">{film.release_date}</p>
            </div>
            <div>
              <p className="text-gray-900 text-xs font-bold uppercase mb-2">
                Score
              </p>
              <span className="text-yellow-400 text-xs font-semibold mb-2">
                {film.rt_score} / 100
              </span>
            </div>
          </div>
        </div>

        {people.length > 0 && (
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Personajes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {people.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}