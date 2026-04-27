import { useState } from "react";
import type { Quote } from "@/schemas/quote.schema";
import { Search, ChevronLeft, ChevronRight, Quote as QuoteIcon, User, Film } from "lucide-react";

interface Props {
  readonly quotes: Quote[];
  readonly charactersMap: Record<string, string>;
  readonly moviesMap: Record<string, string>;
}

export default function QuoteSearch({ quotes, charactersMap, moviesMap }: Props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const filtered = quotes.filter((q) =>
    q.dialog.toLowerCase().includes(query.toLowerCase()) ||
    (charactersMap[q.character] || "").toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold font-serif italic text-white tracking-tight">Palabras de Arda</h2>
          <div className="h-1 w-24 bg-linear-to-r from-amber-600 to-transparent"></div>
          <p className="text-zinc-500 text-sm italic font-serif">"Lo que ha sido dicho no puede ser olvidado..."</p>
        </div>

        <div className="relative group w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500 transition-colors w-4 h-4" />
          <input
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Buscar frase o personaje..."
            className="w-full bg-white/2 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/4 transition-all backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((quote) => (
          <div 
            key={quote.id} 
            className="relative p-8 bg-white/2 backdrop-blur-md rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 group flex flex-col h-full"
          >
            <div className="absolute top-4 right-6 text-4xl text-amber-500/5 font-serif select-none group-hover:text-amber-500/10 transition-colors">“</div>
            
            <p className="text-zinc-200 text-lg italic leading-relaxed font-serif relative z-10 mb-8 flex-1">
              {quote.dialog}
            </p>

            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-zinc-500">
                <User size={12} className="text-amber-700" />
                <span className="text-[10px] uppercase tracking-widest font-black text-zinc-400">
                  {charactersMap[quote.character] || "Personaje Desconocido"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <Film size={12} />
                <span className="text-[10px] uppercase tracking-widest font-bold italic">
                  {moviesMap[quote.movie] || "Película Desconocida"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-8 mt-20">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="p-4 rounded-2xl border border-white/5 bg-white/2 text-zinc-500 hover:border-amber-500/40 hover:text-amber-400 disabled:opacity-10 transition-all hover:bg-white/5"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex flex-col items-center gap-1">
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Registro</span>
            <span className="text-amber-600 font-serif italic text-xl">{page} <span className="text-zinc-700 mx-2">/</span> {totalPages}</span>
          </div>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="p-4 rounded-2xl border border-white/5 bg-white/2 text-zinc-500 hover:border-amber-500/40 hover:text-amber-400 disabled:opacity-10 transition-all hover:bg-white/5"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
