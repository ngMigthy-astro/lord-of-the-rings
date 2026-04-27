import { paginatedSchema } from "@/schemas/common.schema";
import { apiFetch } from "./api.client";
import { BookSchema, type Book } from "@/schemas/book.schema";

export const getBooks = async (): Promise<Book[]> => {
  const data = await apiFetch<any>("/book");
  return paginatedSchema(BookSchema).parse(data).docs;
};

export const getBookById = async (id: string): Promise<Book> => {
  const data = await apiFetch<any>(`/book/${id}`);
  return BookSchema.parse(data.docs[0]);
};
