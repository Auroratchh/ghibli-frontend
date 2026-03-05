import { Film } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface FilmCardProps {
  film: Film;
}

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <Link href={`/films/${film.id}`}>
      <div>
        <Image
          src={film.image}
          alt={film.title}
          width={300}
          height={400}
        />
        <h2>{film.title}</h2>
        <p>{film.release_date}</p>
        <p>{film.rt_score}</p>
      </div>
    </Link>
  );
}