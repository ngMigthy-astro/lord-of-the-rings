import { type Movie, MoviesSchema } from "@/schemas/movie.schema";
import { paginatedSchema } from "@/schemas/common.schema";
import { apiFetch } from "./api.client";

export const getMovies = async (): Promise<Movie[]> => {
  const data = await apiFetch<any>("/movie");
  return paginatedSchema(MoviesSchema).parse(data).docs;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const data = await apiFetch<any>(`/movie/${id}`);
  return MoviesSchema.parse(data.docs[0]);
};
