"use client";

import { useState, useEffect } from "react";
import { Film } from "@/types";
import { getAllFilms } from "@/services/api";
import SearchBar from "@/components/SearchBar";
import FilmGrid from "@/components/FilmGrid";

export default function Home() {
  const [films, setFilms] = useState<Film[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        const data = await getAllFilms();
        setFilms(data);
      } catch (err) {
        setError("No se pudieron cargar las películas");
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, []);

  const filteredFilms = search
  ? films.filter((film) =>
      film.title.toLowerCase().includes(search.toLowerCase())
    )
  : films.slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-black text-gray-900 tracking-tight mb-2">
            Studio Ghibli
          </h1>
          <p className="text-gray-400 text-lg font-medium">
            API DE STUDIO GHIBLI
          </p>
        </div>
        <div className="mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <FilmGrid films={filteredFilms} loading={loading} error={error} />
      </div>
    </main>
  );
}