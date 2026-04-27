import type { Movie } from "@/schemas/movie.schema";
import { Film, Clock, Trophy, ArrowRight } from "lucide-react";

export default function MovieCard({ movie }: { readonly movie: Movie }) {
  return (
    <a
      href={`/movies/${movie.id}`}
      className="group relative p-8 bg-white/2 backdrop-blur-md rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Film size={80} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-amber-500 transition-colors mb-6 font-serif leading-tight">
        {movie.name}
      </h3>

      <div className="space-y-4 mt-auto">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-zinc-800/50 rounded-lg border border-white/5">
            <Clock size={12} className="text-amber-700" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500">
            {movie.runtimeInMinutes} min
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-zinc-800/50 rounded-lg border border-white/5">
            <Trophy size={12} className="text-amber-700" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500">
            {movie.academyAwardWins} Oscars
          </span>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-amber-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        Ver Crónica
        <ArrowRight size={14} />
      </div>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 h-0.75 w-0 bg-linear-to-r from-amber-900 via-amber-500 to-amber-900 group-hover:w-full transition-all duration-700"></div>
    </a>
  );
}
