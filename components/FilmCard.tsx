import { Film } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface FilmCardProps {
  film: Film;
}

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <Link href={`/films/${film.id}`}>
      <div className="bg-black rounded-2xl overflow-hidden">
        <div className="relative w-full h-60">
          <Image
            src={film.image}
            alt={film.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
           <h2 className="text-gray-100 font-bold ">Title:</h2>
          <h2 className="text-white font-bold text-lg leading-tight">{film.title}</h2>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-400 text-sm">Date:</p>
            <p className="text-gray-400 text-sm">{film.release_date}</p>
            <span className="text-gray-400 text-sm">Score:</span>
            <span className="text-yellow-400 text-sm">{film.rt_score} / 100</span>
          </div>
        </div>
      </div>
    </Link>
  );
}