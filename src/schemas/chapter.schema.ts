import z from "zod";

export const ChapterSchema = z
  .object({
    _id: z.string(),
    chapterName: z.string(),
    book: z.string().optional(),
  })
  .transform((data) => ({
    ...data,
    id: data._id,
  }));

export type Chapter = z.infer<typeof ChapterSchema>;
