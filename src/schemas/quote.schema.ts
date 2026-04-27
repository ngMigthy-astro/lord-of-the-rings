import z from "zod";

export const QuoteSchema = z
  .object({
    _id: z.string(),
    dialog: z.string(),
    movie: z.string(),
    character: z.string(),
  })
  .transform((data) => ({
    ...data,
    id: data._id,
  }));

export type Quote = z.infer<typeof QuoteSchema>;
