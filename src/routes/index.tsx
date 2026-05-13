import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { HeroMontage } from "@/components/HeroMontage";
import { ArrowRight, Rocket, BrainCircuit, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TDS Global — Beyond Training. Into Transformation." },
      {
        name: "description",
        content:
          "Customised corporate leadership, mindset and team transformation programs from Chennai — measurable behavioural change across India and globally.",
      },
      { property: "og:title", content: "TDS Global — Beyond Training. Into Transformation." },
      {
        property: "og:description",
        content:
          "We don't train people. We transform them. Customised leadership and team transformation programs.",
      },
      { property: "og:url", content: "https://elevate-potential-studio.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://elevate-potential-studio.lovable.app/" },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Rocket,
    word: "TRANSFORM",
    text: "We shift mindsets, break limiting patterns, and create permanent behavioural change in every individual we work with.",
    accent: "from-[oklch(0.78_0.14_82)] to-[oklch(0.88_0.09_85)]",
  },
  {
    icon: BrainCircuit,
    word: "DEVELOP",
    text: "We build leaders from the inside out — strengthening capability, confidence, and decision-making at every level.",
    accent: "from-[oklch(0.78_0.14_82)] to-[oklch(0.88_0.09_85)]",
  },
  {
    icon: TrendingUp,
    word: "SCALE",
    text: "We design programs that grow with your organisation — from a single team to an entire enterprise, locally and globally.",
    accent: "from-[oklch(0.78_0.14_82)] to-[oklch(0.88_0.09_85)]",
  },
];

function Home() {
  return (
    <PageShell flush>
      <HeroMontage />

      {/* Three words */}
      <section className="py-28 md:py-36 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--navy) 0%, transparent 50%)" }} />
        <div className="container-narrow relative">
          <div className="max-w-4xl mb-20 reveal-on-scroll">
            <p className="text-sm md:text-base uppercase tracking-[0.5em] text-gold mb-6 font-semibold">
              <span className="inline-block h-px w-12 bg-gold align-middle mr-4" />
              What TDS Global Stands For
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-[1.02]">
              Three Words. <span className="italic text-gradient-gold">One Promise.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {pillars.map((p, i) => (
              <div
                key={p.word}
                className="pillar-card group relative p-10 rounded-3xl border border-border bg-card overflow-hidden"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy-deep to-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="h-20 w-20 rounded-2xl bg-gold-gradient flex items-center justify-center mb-7 shadow-gold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <p.icon className="text-navy-deep" size={40} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display tracking-wider text-navy group-hover:text-gold mb-4 transition-colors duration-500">{p.word}</h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors duration-500">{p.text}</p>
                  <div className="mt-7 h-[2px] w-12 bg-gold-gradient group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs teaser */}
      <section className="py-24 bg-background">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.5em] text-gold mb-6 font-semibold">
                <span className="inline-block h-px w-12 bg-gold align-middle mr-4" />
                What We Do
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display max-w-3xl leading-[1.05]">
                Programs designed for <span className="italic text-gradient-gold">transformational change.</span>
              </h2>
            </div>
            <Link to="/programs" className="text-navy font-semibold inline-flex items-center gap-2 border-b-2 border-gold pb-1 hover:gap-3 transition-all">
              See all programs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["01", "Leadership Forge Program", "A high-intensity leadership journey for mid to senior managers."],
              ["02", "Outbound Leadership Expedition", "Outdoor challenges and structured reflection that shift how teams lead."],
              ["03", "Mindset Shift Workshop", "Dismantle limiting beliefs. Build the resilience modern leaders need."],
              ["04", "First-Time Manager Program", "Equip new managers with the mindset and tools to lead from day one."],
              ["05", "High Performance Team Program", "Trust, clarity and shared accountability for cross-functional teams."],
              ["06", "Executive Presence Masterclass", "Communication authority and gravitas for senior leaders."],
            ].map(([n, t, d]) => (
              <Link
                key={n}
                to="/programs"
                className="group p-7 rounded-2xl border border-border bg-card hover:bg-navy hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-gold text-sm font-mono">{n}</span>
                <h3 className="text-xl font-display mt-3 mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70">{d}</p>
                <ArrowRight size={18} className="mt-5 text-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(circle at 85% 50%, var(--gold) 0%, transparent 50%)" }} />
        <div className="container-narrow relative">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Ready to begin?</p>
            <h2 className="text-4xl md:text-6xl font-display leading-tight">
              Stop filling training calendars.
              <br />
              <span className="italic text-gradient-gold">Start building leaders.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:scale-[1.02] transition-transform"
            >
              Book a Discovery Call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
