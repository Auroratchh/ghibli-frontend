import { Person } from "@/types";

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="bg-black rounded-2xl p-4 shadow-md">
      <h3 className="text-white font-bold text-lg mb-3">{person.name}</h3>
      <div className="flex flex-col gap-1">
        <p className="text-gray-300 text-sm">
          <span className="text-yellow-400 font-semibold">Género: </span>
          {person.gender}
        </p>
        <p className="text-gray-300 text-sm">
          <span className="text-yellow-400 font-semibold">Edad: </span>
          {person.age}
        </p>
        <p className="text-gray-300 text-sm">
          <span className="text-yellow-400 font-semibold">Ojos: </span>
          {person.eye_color}
        </p>
        <p className="text-gray-300 text-sm">
          <span className="text-yellow-400 font-semibold">Cabello: </span>
          {person.hair_color}
        </p>
      </div>
    </div>
  );
}