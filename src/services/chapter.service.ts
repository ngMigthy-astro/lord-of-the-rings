import { paginatedSchema } from "@/schemas/common.schema";
import { apiFetch } from "./api.client";
import { ChapterSchema, type Chapter } from "@/schemas/chapter.schema";

export const getChapters = async (bookId?: string): Promise<Chapter[]> => {
  const endpoint = bookId ? `/book/${bookId}/chapter` : "/chapter";
  const data = await apiFetch<any>(endpoint);
  return paginatedSchema(ChapterSchema).parse(data).docs;
};
