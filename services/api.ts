import { Film, Person } from "@/types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getAllFilms(): Promise<Film[]> {
  const response = await fetch(`${BACKEND_URL}/api/films`);
  if (!response.ok) throw new Error("Error al obtener películas");
  return response.json();
}

export async function getFilmById(id: string): Promise<Film> {
  const response = await fetch(`${BACKEND_URL}/api/films/${id}`);
  if (!response.ok) throw new Error("Película no encontrada");
  return response.json();
}

export async function getAllPeople(): Promise<Person[]> {
  const response = await fetch(`${BACKEND_URL}/api/people`);
  if (!response.ok) throw new Error("Error al obtener personajes");
  return response.json();
}

export async function getPersonById(id: string): Promise<Person> {
  const response = await fetch(`${BACKEND_URL}/api/people/${id}`);
  if (!response.ok) throw new Error("Personaje no encontrado");
  return response.json();
}