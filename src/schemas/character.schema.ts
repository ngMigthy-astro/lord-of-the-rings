import z from "zod";

export const CharacterSchema = z
  .object({
    _id: z.string(),
    name: z.string(),
    wikiUrl: z.url().nullable(),
    race: z.string().nullable(),
    birth: z.string().nullable(),
    gender: z.string().nullable(),
    death: z.string().nullable(),
    hair: z.string().nullable(),
    height: z.string().nullable(),
    realm: z.string().nullable(),
    spouse: z.string().nullable(),
  })
  .transform((data) => ({
    ...data,
    id: data._id,
  }));

export type Character = z.infer<typeof CharacterSchema>;
