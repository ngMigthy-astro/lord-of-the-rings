import { useState } from "react";
import type { Character } from "../../schemas/character.schema";
import CharacterCard from "../characters/CharacterCard";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";

interface Props {
  readonly characters: Character[];
}

export default function CharacterSearch({ characters }: Props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold font-serif italic text-white tracking-tight">
            Personajes
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-amber-600 to-transparent"></div>
        </div>

        <div className="relative group w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500 transition-colors w-4 h-4" />
          <input
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Buscar en los registros de Arda..."
            className="w-full bg-white/2 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/4 transition-all backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {paginated.map((c) => (
          <CharacterCard
            key={c._id}
            id={c._id}
            name={c.name}
            race={c.race}
            gender={c.gender}
            realm={c.realm}
            birth={c.birth}
            death={c.death}
            spouse={c.spouse}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-8 mt-20">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="p-4 rounded-2xl border border-white/5 bg-white/2 text-zinc-500 hover:border-amber-500/40 hover:text-amber-400 disabled:opacity-10 transition-all hover:bg-white/2"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex flex-col items-center gap-1">
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">
              Registro
            </span>
            <span className="text-amber-600 font-serif italic text-xl">
              {page} <span className="text-zinc-700 mx-2">/</span> {totalPages}
            </span>
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
