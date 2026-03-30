import { MoviesSchema, paginatedSchema } from "../schemas/movie.schema";

const baseUrl = "https://the-one-api.dev/v2";
const apiKey = "PQKaT1BOF9Pu_ageDwuY";

export const getMovies = async () => {
  const resp = await fetch(`${baseUrl}/movie`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await resp.json();
  return paginatedSchema(MoviesSchema).parse(data).docs;
};
