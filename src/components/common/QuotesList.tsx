import { useState } from "react";
import type { Quote } from "@/schemas/quote.schema";
import { ChevronLeft, ChevronRight, Quote as QuoteIcon } from "lucide-react";

interface Props {
  readonly quotes: Quote[];
  readonly title?: string;
}

export default function QuotesList({
  quotes,
  title = "Palabras de Poder",
}: Props) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(quotes.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = quotes.slice(start, start + itemsPerPage);

  if (quotes.length === 0) {
    return (
      <div className="text-center py-20 bg-white/2 rounded-3xl border border-dashed border-white/10">
        <p className="text-zinc-500 italic text-lg font-serif">
          "Este relato guarda silencio en los registros actuales..."
        </p>
      </div>
    );
  }

  return (
    <section className="mt-20">
      <div className="flex items-center gap-6 mb-12">
        <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
          <QuoteIcon className="text-amber-500 w-6 h-6" />
        </div>
        <h2 className="text-4xl font-bold text-white font-serif italic tracking-tight">
          {title}
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-amber-500/20 to-transparent"></div>
        <span className="text-xs font-bold text-zinc-600 tracking-[0.3em] uppercase">
          {quotes.length} Frases
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paginated.map((quote) => (
          <div
            key={quote._id}
            className="relative p-10 bg-white/2 backdrop-blur-md rounded-[2.5rem] border border-white/5 hover:border-amber-500/30 transition-all duration-500 group"
          >
            <span className="absolute top-6 left-8 text-7xl text-amber-500/5 font-serif select-none group-hover:text-amber-500/10 transition-colors">
              “
            </span>
            <p className="text-zinc-200 text-xl italic leading-relaxed font-serif relative z-10">
              {quote.dialog}
            </p>
            <div className="mt-6 flex justify-end">
              <div className="h-1 w-12 bg-amber-900/30 rounded-full group-hover:w-full group-hover:bg-amber-600/20 transition-all duration-700"></div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-10 mt-16">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="flex items-center gap-2 text-zinc-500 hover:text-amber-500 disabled:opacity-10 transition-all group"
          >
            <ChevronLeft
              size={24}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">
              Anterior
            </span>
          </button>

          <div className="w-px h-8 bg-white/5"></div>

          <span className="text-amber-600 font-serif italic text-2xl">
            {page} <span className="text-zinc-800 mx-2">/</span> {totalPages}
          </span>

          <div className="w-px h-8 bg-white/5"></div>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="flex items-center gap-2 text-zinc-500 hover:text-amber-500 disabled:opacity-10 transition-all group"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">
              Siguiente
            </span>
            <ChevronRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      )}
    </section>
  );
}
