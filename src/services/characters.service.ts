import { CharacterSchema } from "../schemas/character.schema";
import { paginatedSchema } from "../schemas/common.schema";
import { apiFetch } from "./api.client";

export const getCharacters = async () => {
  const data = await apiFetch<any>("/character");
  return paginatedSchema(CharacterSchema).parse(data).docs;
};

export const getCharacterById = async (id: string) => {
  const data = await apiFetch<any>(`/character/${id}`);
  return CharacterSchema.parse(data.docs[0]);
};
