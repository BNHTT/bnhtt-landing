import { DiagonalCascade } from "../components/DiagonalCascade";

/**
 * WIP scaffold for the BNHTT AI Studio agency landing (K.I.N.D-inspired).
 * This iteration only ships the diagonal background cascade; hero
 * copy, nav and structure land in the next pieces of the roadmap.
 */
export default function AgencyPage() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <DiagonalCascade />
      <div className="relative z-10 flex min-h-screen items-end p-4">
        <span className="font-['IBM_Plex_Mono',monospace] text-[11px] tracking-widest text-white/40">
          WIP — cascada de fondo (próxima iteración: hero + nav)
        </span>
      </div>
    </div>
  );
}
