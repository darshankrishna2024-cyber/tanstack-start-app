import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children, flush = false }: { children: ReactNode; flush?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={flush} />
      <main className={`flex-1 ${flush ? "" : "pt-20 md:pt-24"}`}>{children}</main>
      <Footer />
    </div>
  );
}

type Variant = "about" | "programs" | "why" | "approach" | "contact" | "default";

export function PageHero({
  eyebrow, title, subtitle, variant = "default",
}: { eyebrow: string; title: string; subtitle?: string; variant?: Variant }) {
  return (
    <section className="bg-hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      {/* Gold sweep lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Variant-specific motion graphic on the right */}
      <HeroAccent variant={variant} />

      <div className="container-narrow py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-up">
            <span className="h-px w-10 bg-gold" />
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.05] animate-fade-up">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-up leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}

function HeroAccent({ variant }: { variant: Variant }) {
  const common = "hidden lg:block absolute top-1/2 right-[5%] -translate-y-1/2 pointer-events-none";

  if (variant === "about") {
    // Profile constellation — "people first"
    return (
      <div className={common}>
        <div className="relative h-[380px] w-[380px]">
          {/* orbits */}
          <div className="absolute inset-0 rounded-full border border-gold/30 founder-orbit-slow" />
          <div className="absolute inset-10 rounded-full border border-gold/20 founder-orbit-reverse" />
          {/* glow center */}
          <div className="absolute inset-0 m-auto h-32 w-32 rounded-full bg-gold/20 blur-2xl founder-float" />
          {/* central monogram */}
          <div className="absolute inset-0 m-auto h-24 w-24 rounded-full bg-gold-gradient shadow-gold flex items-center justify-center text-navy-deep font-display text-3xl">
            TDS
          </div>
          {/* orbiting profile chips */}
          {[
            { x: "50%", y: "2%", label: "Lead", initials: "AP" },
            { x: "94%", y: "30%", label: "Coach", initials: "RK" },
            { x: "78%", y: "92%", label: "Design", initials: "MN" },
            { x: "12%", y: "82%", label: "Mentor", initials: "SV" },
            { x: "2%", y: "30%", label: "Facilitate", initials: "JL" },
          ].map((p, i) => (
            <div
              key={p.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 founder-float"
              style={{ left: p.x, top: p.y, animationDelay: `${i * 0.4}s` }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-navy border border-gold/60 text-gold text-xs font-semibold flex items-center justify-center shadow-gold">
                  {p.initials}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80">{p.label}</span>
              </div>
            </div>
          ))}
          {/* spark dots */}
          <div className="absolute top-1/4 right-2 h-2 w-2 rounded-full bg-gold founder-orbit-slow" />
          <div className="absolute bottom-1/4 left-2 h-2 w-2 rounded-full bg-gold-soft founder-orbit-reverse" />
        </div>
      </div>
    );
  }

  if (variant === "programs") {
    // Stacked program cards — "structured offerings"
    return (
      <div className={common}>
        <div className="relative h-[380px] w-[340px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-x-0 h-44 rounded-2xl border border-gold/30 bg-navy/40 backdrop-blur-sm founder-float"
              style={{
                top: `${i * 60}px`,
                transform: `rotate(${(i - 1) * 4}deg)`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <div className="p-5">
                <div className="h-2 w-12 rounded-full bg-gold mb-3" />
                <div className="h-3 w-32 rounded-full bg-white/40 mb-2" />
                <div className="h-3 w-24 rounded-full bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "why") {
    // Pillar bars rising — "differentiators / outcomes"
    return (
      <div className={common}>
        <div className="flex items-end gap-4 h-[320px]">
          {[120, 180, 240, 200, 280].map((h, i) => (
            <div key={i} className="relative w-12 rounded-t-lg overflow-hidden">
              <div
                className="absolute bottom-0 inset-x-0 bg-gold-gradient shadow-gold"
                style={{ height: `${h}px`, animation: `fade-up 1s ${i * 0.15}s both` }}
              />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gold founder-float"
                style={{ animationDelay: `${i * 0.2}s` }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "approach") {
    // 4-node connected path — "process / methodology"
    return (
      <div className={common}>
        <svg width="380" height="320" viewBox="0 0 380 320" fill="none">
          <path d="M40 60 Q 130 60, 130 160 T 220 260 T 340 160" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.5">
            <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2s" repeatCount="indefinite" />
          </path>
          {[
            [40, 60], [130, 160], [220, 260], [340, 160],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="22" fill="var(--navy)" stroke="var(--gold)" strokeWidth="2" />
              <circle cx={cx} cy={cy} r="34" stroke="var(--gold)" strokeWidth="1" opacity="0.3">
                <animate attributeName="r" from="22" to="44" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>
              <text x={cx} y={cy + 5} textAnchor="middle" fill="var(--gold)" fontSize="14" fontFamily="monospace">0{i + 1}</text>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "contact") {
    // Pulsing location pin with rings — "reach us"
    return (
      <div className={common}>
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          {[60, 100, 140].map((r, i) => (
            <circle key={r} cx="160" cy="160" r={r} stroke="var(--gold)" strokeWidth="1" opacity="0.25">
              <animate attributeName="r" from={r} to={r + 30} dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <path d="M160 110 C 138 110, 122 128, 122 150 C 122 178, 160 220, 160 220 C 160 220, 198 178, 198 150 C 198 128, 182 110, 160 110 Z"
            fill="var(--gold)" opacity="0.9" />
          <circle cx="160" cy="148" r="10" fill="var(--navy-deep)" />
        </svg>
      </div>
    );
  }

  // default
  return (
    <>
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full opacity-40 founder-float pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)" }} />
      <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full opacity-25 founder-float pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 265) 0%, transparent 65%)", animationDelay: "1.2s" }} />
    </>
  );
}
