import { Person } from "@/types";

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>Género: {person.gender}</p>
      <p>Edad: {person.age}</p>
      <p>Color de ojos: {person.eye_color}</p>
      <p>Color de cabello: {person.hair_color}</p>
    </div>
  );
}