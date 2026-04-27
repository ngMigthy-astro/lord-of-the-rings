import { Venus, Mars, MapPin, Heart } from "lucide-react";

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
    <a href={`/characters/${id}`} className="block group h-full">
      <article className="h-full relative overflow-hidden bg-white/2 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex flex-col gap-5 hover:bg-white/2 hover:border-amber-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:-translate-y-1">
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 relative z-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-zinc-100 text-xl font-bold font-serif italic tracking-tight group-hover:text-amber-400 transition-colors duration-300">
              {name}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-600/80">
                {race || "Mortal"}
              </span>
              {gender && (
                <span className="text-zinc-600 scale-75">
                  {gender === "Male" ? <Mars size={14} /> : <Venus size={14} />}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-3 relative z-10">
          {realm && (
            <div className="flex items-center gap-3 text-zinc-500">
              <MapPin size={12} className="text-amber-700" />
              <span className="text-[11px] font-medium truncate">{realm}</span>
            </div>
          )}
          {spouse && spouse !== "NaN" && (
            <div className="flex items-center gap-3 text-zinc-500">
              <Heart size={12} className="text-amber-700" />
              <span className="text-[11px] font-medium truncate">{spouse}</span>
            </div>
          )}
        </div>

        {/* Footer info */}
        {(birth || death) && (
          <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-1 relative z-10">
            {birth && (
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-zinc-600">
                <span>Nacimiento</span>
                <span className="text-zinc-400 font-bold">{birth}</span>
              </div>
            )}
            {death && (
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-zinc-600 mt-1">
                <span>Muerte</span>
                <span className="text-zinc-400 font-bold">{death}</span>
              </div>
            )}
          </div>
        )}

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-transparent via-amber-600 to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
      </article>
    </a>
  );
}
