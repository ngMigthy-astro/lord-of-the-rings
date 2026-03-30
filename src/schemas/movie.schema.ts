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

export const paginatedSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    docs: z.array(schema),
    total: z.number(),
    limit: z.number(),
    offset: z.number(),
    page: z.number(),
    pages: z.number(),
  });

export type Movies = z.infer<typeof paginatedSchema>;