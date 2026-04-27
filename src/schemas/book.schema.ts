import z from "zod";

export const BookSchema = z
  .object({
    _id: z.string(),
    name: z.string(),
  })
  .transform((data) => ({
    ...data,
    id: data._id,
  }));

export type Book = z.infer<typeof BookSchema>;
