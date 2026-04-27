import { paginatedSchema } from "@/schemas/common.schema";
import { apiFetch } from "./api.client";
import { Quote, QuoteSchema } from "@/schemas/quote.schema";

export const getQuotes = async (
  id?: string,
  type: "movie" | "character" = "movie",
): Promise<Quote[]> => {
  let endpoint = "/quote";
  if (id) {
    endpoint =
      type === "movie" ? `/movie/${id}/quote` : `/character/${id}/quote`;
  }
  const data = await apiFetch<any>(endpoint);
  return paginatedSchema(QuoteSchema).parse(data).docs;
};
