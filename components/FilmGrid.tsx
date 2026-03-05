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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-900 font-bold text-xl">Algo salió mal</p>
        <p className="text-gray-500 text-sm mt-1">{error}</p>
      </div>
    );
  }

  if (films.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-900 font-bold text-xl"> No se encontraron películas </p>
        <p className="text-gray-500 text-sm mt-1"> Intenta con otro término de búsqueda </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}