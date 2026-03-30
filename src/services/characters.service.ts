import z from "zod";
import { CharacterSchema } from "../schemas/character.schema";

const baseUrl = "https://the-one-api.dev/v2";
const apiKey = "PQKaT1BOF9Pu_ageDwuY";

export const getCharacters = async () => {
  const resp = await fetch(`${baseUrl}/character`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await resp.json();
  return z.array(CharacterSchema).parse(data.docs);
};

export const getCharacterById = async (id: string) => {
  const resp = await fetch(`${baseUrl}/character/${id}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await resp.json();
  return CharacterSchema.parse(data.docs[0]);
};
