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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!film) return <p>Película no encontrada</p>;

  return (
    <main>
      <Link href="/">← Volver</Link>
      <Image
        src={film.movie_banner}
        alt={film.title}
        width={1200}
        height={400}
      />
      <h1>{film.title}</h1>
      <p>{film.original_title}</p>
      <p>{film.description}</p>
      <p>Director: {film.director}</p>
      <p>Productor: {film.producer}</p>
      <p>Año: {film.release_date}</p>
      <p>{film.rt_score}</p>

      {people.length > 0 && (
        <section>
          <h2>Personajes</h2>
          <div>
            {people.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}