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

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <h1>Studio Ghibli</h1>
      <SearchBar value={search} onChange={setSearch} />
      <FilmGrid films={filteredFilms} loading={loading} error={error} />
    </main>
  );
}