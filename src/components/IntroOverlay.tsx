import { useEffect, useState } from "react";
import logo from "@/assets/tds-logo.png";

export function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("tds_intro_played")) return;
    setMounted(true);
    sessionStorage.setItem("tds_intro_played", "1");
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setFading(true), 2200);
    const t2 = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "";
    }, 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 intro-glow" />
      {/* Gold sweep line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent intro-sweep" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="bg-cream rounded-2xl p-5 shadow-gold intro-logo">
          <img src={logo} alt="TDS Global" className="h-16 md:h-20 w-auto object-contain" />
        </div>
        <div className="overflow-hidden">
          <p className="font-display text-base md:text-lg text-gold tracking-[0.4em] uppercase intro-tagline">
            Transform · Develop · Scale
          </p>
        </div>
        <div className="h-px w-40 bg-white/15 overflow-hidden">
          <div className="h-full w-full bg-gold-gradient intro-bar" />
        </div>
      </div>
    </div>
  );
}
