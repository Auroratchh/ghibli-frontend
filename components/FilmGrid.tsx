import { Film } from "@/types";
import FilmCard from "./FilmCard";
import SkeletonCard from "./SkeletonCard";

interface FilmGridProps {
  films: Film[];
  loading: boolean;
  error: string | null;
}

export default function FilmGrid({ films, loading, error }: FilmGridProps) {
  if (loading) {
    return (
      <div>
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Algo salió mal</p>
        <p>{error}</p>
      </div>
    );
  }

  if (films.length === 0) {
    return <p>No se encontraron películas</p>;
  }

  return (
    <div>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}