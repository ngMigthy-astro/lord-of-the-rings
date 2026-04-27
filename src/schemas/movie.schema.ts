import z from "zod";

export const MoviesSchema = z
  .object({
    _id: z.string(),
    name: z.string(),
    runtimeInMinutes: z.number(),
    budgetInMillions: z.number(),
    boxOfficeRevenueInMillions: z.number(),
    academyAwardNominations: z.number(),
    academyAwardWins: z.number(),
    rottenTomatoesScore: z.number(),
  })
  .transform((data) => ({
    ...data,
    id: data._id,
  }));

export type Movie = z.infer<typeof MoviesSchema>;
