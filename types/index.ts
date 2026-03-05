export interface Film {
  id: string;
  title: string;
  original_title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  people: string[];
}

export interface Person {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: string[];
}