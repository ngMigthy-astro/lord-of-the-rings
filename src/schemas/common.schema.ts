import z from "zod";

export const paginatedSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    docs: z.array(schema),
    total: z.number(),
    limit: z.number(),
    offset: z.number(),
    page: z.number(),
    pages: z.number(),
  });
