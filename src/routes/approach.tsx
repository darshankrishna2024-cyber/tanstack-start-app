import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Search, PenTool, Users, Activity, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — The TDS Global Methodology" },
      {
        name: "description",
        content:
          "Discover · Design · Deliver · Sustain. The four-stage TDS Global methodology that turns corporate training into measurable, lasting transformation.",
      },
      { property: "og:title", content: "The TDS Global Methodology" },
      {
        property: "og:description",
        content:
          "A four-stage approach — Discover, Design, Deliver, Sustain — that distinguishes TDS Global from every other training company.",
      },
      { property: "og:url", content: "https://elevate-potential-studio.lovable.app/approach" },
    ],
    links: [
      { rel: "canonical", href: "https://elevate-potential-studio.lovable.app/approach" },
    ],
  }),
  component: Approach,
});

const steps = [
  { icon: Search, k: "Discover", t: "Before we design anything, we listen. We conduct deep discovery sessions with key stakeholders to understand your organisation's challenges, culture, and the specific transformation you need." },
  { icon: PenTool, k: "Design", t: "We build a customised program architecture using the right blend of classroom, outbound, and experiential methodologies. Nothing is templated. Everything is purpose-built for your people." },
  { icon: Users, k: "Deliver", t: "Our facilitators are experienced practitioners — not just trainers. They bring real-world credibility into every session, creating environments where honest reflection and genuine change become possible." },
  { icon: Activity, k: "Sustain", t: "We follow up. We measure. We track behavioural change over time. Because transformation that doesn't stick is not transformation — it is entertainment." },
];

function Approach() {
  return (
    <PageShell>
      <PageHero
        variant="approach"
        eyebrow="Our Approach"
        title="The TDS Global Methodology."
        subtitle="Built on four principles that distinguish us from every other training company in the market."
      />

      {/* Roadmap visual */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.5em] text-gold mb-5 font-semibold">The Roadmap</p>
            <h2 className="text-4xl md:text-5xl font-display">Four stages. One transformation.</h2>
          </div>

          {/* Desktop SVG roadmap */}
          <div className="hidden md:block relative">
            <svg viewBox="0 0 1000 220" className="w-full h-auto" aria-hidden="true">
              <defs>
                <linearGradient id="road" x1="0" x2="1">
                  <stop offset="0" stopColor="var(--gold)" />
                  <stop offset="1" stopColor="var(--navy)" />
                </linearGradient>
              </defs>
              <path d="M 30 180 C 200 30, 350 30, 500 110 S 800 220, 970 60"
                    fill="none" stroke="url(#road)" strokeWidth="6" strokeLinecap="round" opacity="0.25" />
              <path d="M 30 180 C 200 30, 350 30, 500 110 S 800 220, 970 60"
                    fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round"
                    className="road-flow" />
              {[
                { x: 30, y: 180 },
                { x: 340, y: 60 },
                { x: 660, y: 150 },
                { x: 970, y: 60 },
              ].map((p, i) => (
                <g key={i} className="road-node" style={{ animationDelay: `${i * 0.25}s`, transformOrigin: `${p.x}px ${p.y}px` }}>
                  <circle cx={p.x} cy={p.y} r="22" fill="var(--navy)" stroke="var(--gold)" strokeWidth="3" />
                  <text x={p.x} y={p.y + 5} textAnchor="middle" fill="var(--gold)" fontSize="14" fontWeight="700">0{i + 1}</text>
                </g>
              ))}
            </svg>
            <div className="grid grid-cols-4 gap-5 -mt-2">
              {steps.map((s, i) => (
                <div key={s.k} className="text-center road-node group" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gold-gradient shadow-gold mb-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                    <s.icon className="text-navy-deep" size={24} />
                  </div>
                  <span className="block font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <h3 className="font-display text-2xl text-navy mt-1">{s.k}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical roadmap */}
          <div className="md:hidden relative">
            <div className="absolute left-7 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold via-border to-gold road-flow rounded-full" />
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={s.k} className="flex gap-5 items-start road-node" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="relative z-10 h-14 w-14 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold flex-shrink-0">
                    <s.icon className="text-navy-deep" size={24} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <h3 className="font-display text-2xl text-navy">{s.k}</h3>
                    <p className="text-muted-foreground mt-2">{s.t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-25"
          style={{ background: "radial-gradient(circle at 30% 70%, var(--gold) 0%, transparent 45%)" }} />
        <div className="container-narrow text-center relative">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">What Happens Next</p>
          <h2 className="text-3xl md:text-5xl font-display max-w-3xl mx-auto leading-tight">
            From first conversation to lasting transformation.
          </h2>
          <ol className="mt-12 grid md:grid-cols-5 gap-4 text-left max-w-5xl mx-auto">
            {[
              "Submit your enquiry or book a discovery call",
              "Our team responds within 24 hours",
              "We conduct a complimentary needs assessment",
              "We present a customised program proposal",
              "We begin your transformation journey",
            ].map((s, i) => (
              <li
                key={i}
                className="group relative p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-white/10 hover:shadow-gold"
              >
                <span className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-gold font-mono text-sm">Step {i + 1}</span>
                <p className="relative mt-2 text-sm text-primary-foreground/85 leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:scale-[1.03] transition-transform">
            Start the journey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
