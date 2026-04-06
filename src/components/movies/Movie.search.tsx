import { useState } from "react";
// import type { Character } from "../../schemas/character.schema";
import CharacterCard from "../characters/CharacterCard";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import type { Movies } from "../../schemas/movie.schema";

interface Props {
  readonly movies: Movies[];
}

export default function CharacterSearch({ movies }: Props) {
  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);
  const start = (page - 1) * 12;

  const filtered = movies.filter((movie:Movies) =>
    movie.name.toLowerCase().includes(query.toLowerCase()),
  );
  const totalPages = Math.ceil(filtered.length / 12);
  const paginated = filtered.slice(start, start + 12);

  return (
    <div>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          onChange={(m) => {
            setQuery(m.target.value);
            setPage(1);
          }}
          placeholder="Busca una película de la Tierra Media..."
          className="w-full max-w-xl bg-zinc-900/60 border border-zinc-800 rounded-xl px-5 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition-all text-sm backdrop-blur-sm"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="p-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-amber-500/40 hover:text-amber-400 disabled:opacity-25 disabled:cursor-not-allowed transition-all hover:cursor-pointer"
        >
          <ArrowBigLeft size={24} />
        </button>
        <span
          className="text-zinc-500 text-sm tracking-widest"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="p-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-amber-500/40 hover:text-amber-400 disabled:opacity-25 disabled:cursor-not-allowed transition-all hover:cursor-pointer"
        >
          <ArrowBigRight size={24} />
        </button>
      </div>
    </div>
  );
}
