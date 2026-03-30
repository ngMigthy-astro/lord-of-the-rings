import { Venus, Mars } from "lucide-react";
interface Props {
  id: string;
  name: string;
  race?: string | null;
  gender?: string | null;
  realm?: string | null;
  birth?: string | null;
  death?: string | null;
  spouse?: string | null;
}

export default function CharacterCard({
  name,
  race,
  gender,
  id,
  realm,
  birth,
  death,
  spouse,
}: Readonly<Props>) {
  return (
    <a href={`/character/${id}`} className="block group h-full">
      <article className="h-full relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 group-hover:border-zinc-700 group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
        {/* acento dorado superior */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-amber-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* encabezado */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-zinc-100 text-sm font-semibold leading-snug group-hover:text-amber-400 transition-colors duration-200">
            {name}
          </h2>
          {gender && (
            <span className="text-zinc-600 text-sm shrink-0 group-hover:text-zinc-400 transition-colors">
              {gender === "Male" ? <Mars></Mars> : <Venus></Venus>}
            </span>
          )}
        </div>

        {/* badges */}
        <div className="flex flex-wrap gap-1.5">
          {race && (
            <span className="bg-amber-500/8 border border-amber-500/15 text-amber-500/70 rounded-md px-2 py-0.5 text-[11px] font-medium">
              {race}
            </span>
          )}
          {realm && (
            <span className="bg-zinc-800 border border-zinc-700/60 text-zinc-500 rounded-md px-2 py-0.5 text-[11px]">
              {realm}
            </span>
          )}
        </div>

        {/* datos extra */}
        {(birth || death || spouse) && (
          <div className="mt-auto pt-3 border-t border-zinc-800 flex flex-col gap-1.5">
            {birth && (
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-600 text-[10px] uppercase tracking-wider w-12 shrink-0">
                  Nace
                </span>
                <span className="text-zinc-500 text-[11px] truncate">
                  {birth}
                </span>
              </div>
            )}
            {death && (
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-600 text-[10px] uppercase tracking-wider w-12 shrink-0">
                  Muere
                </span>
                <span className="text-zinc-500 text-[11px] truncate">
                  {death}
                </span>
              </div>
            )}
            {spouse && (
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-600 text-[10px] uppercase tracking-wider w-12 shrink-0">
                  Cónyuge
                </span>
                <span className="text-zinc-500 text-[11px] truncate">
                  {spouse}
                </span>
              </div>
            )}
          </div>
        )}
      </article>
    </a>

  );
}
