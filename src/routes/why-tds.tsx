import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Check, ArrowRight, Target, Layers, Handshake, Globe2, Gauge } from "lucide-react";
import whyTds from "@/assets/why-tds-1.webp";

export const Route = createFileRoute("/why-tds")({
  head: () => ({
    meta: [
      { title: "Why TDS Global — Customised, Outcome-Driven Training" },
      {
        name: "description",
        content:
          "Why organisations choose TDS Global: fully customised programs, measurable outcomes, three powerful methodologies, and a true transformation partner.",
      },
      { property: "og:title", content: "Why Choose TDS Global" },
      {
        property: "og:description",
        content:
          "We measure success by how many people changed — not by how many attended.",
      },
      { property: "og:url", content: "https://elevate-potential-studio.lovable.app/why-tds" },
    ],
    links: [
      { rel: "canonical", href: "https://elevate-potential-studio.lovable.app/why-tds" },
    ],
  }),
  component: Why,
});

const reasons = [
  ["01", "We Customise Everything", "We don't believe in off-the-shelf programs. Before we design anything, we invest time understanding your organisation's culture, challenges, and people. Every program is built specifically for you."],
  ["02", "We Measure Outcomes, Not Attendance", "Most training companies measure success by how many people attended. We measure success by how many people changed. Every program is tied to specific behavioural outcomes that can be observed and verified."],
  ["03", "We Use Three Powerful Methodologies", "Classroom programs for knowledge and frameworks. Outbound programs for pressure-tested leadership. Experiential programs for embodied learning. Most trainers use one. We use all three."],
  ["04", "We Are Transformation Partners, Not Vendors", "We don't deliver and disappear. We stay engaged with our clients throughout the program cycle — ensuring that learning translates into lasting workplace behaviour."],
  ["05", "We Bring Global Standards to Every Engagement", "Our programs are benchmarked against the world's leading leadership development methodologies while being contextually grounded in the realities of your market and culture."],
] as const;

const workWith = [
  "Mid-size and large corporates across industries",
  "Multinational companies operating in India and Asia",
  "Manufacturing, BFSI, IT, Pharma, FMCG, and Infrastructure sectors",
  "HR and L&D teams seeking a strategic transformation partner",
  "Leadership teams preparing for scale, change, or cultural transformation",
];

const rightPartner = [
  "Building a leadership pipeline for the next 3–5 years",
  "Navigating organisational change and need cultural alignment",
  "Dealing with low engagement, poor collaboration, or leadership gaps",
  "Ready to invest in transformation that delivers measurable ROI",
  "Looking for a partner who challenges your people, not just trains them",
];

function Why() {
  return (
    <PageShell>
      <PageHero
        variant="why"
        eyebrow="Why TDS Global"
        title="Why organisations choose us as their transformation partner."
        subtitle="Five differences that separate TDS Global from every other training company in the market."
      />

      {/* Infographic intro */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 30% 30%, var(--gold) 0%, transparent 45%), radial-gradient(circle at 70% 70%, var(--navy) 0%, transparent 45%)" }} />
        <div className="container-narrow relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.5em] text-gold mb-5 font-semibold">The TDS Global Edge</p>
            <h2 className="text-4xl md:text-5xl font-display">Five forces that move <span className="italic text-gradient-gold">the needle.</span></h2>
          </div>

          {/* Desktop: orbital constellation — compact */}
          <div className="hidden md:block relative mx-auto max-w-2xl aspect-[5/4]">
            <div className="absolute inset-0 m-auto h-32 w-32 lg:h-36 lg:w-36 rounded-full bg-gold-gradient shadow-gold flex items-center justify-center text-navy-deep text-center p-4 found-card cursor-pointer group transition-transform hover:scale-105">
              <div>
                <p className="font-display text-xl lg:text-2xl leading-tight">TDS Global</p>
                <p className="text-[9px] uppercase tracking-[0.3em] mt-1 opacity-80">Edge</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 m-auto rounded-full border border-dashed border-gold/30 founder-orbit-slow" style={{ width: "70%", height: "70%" }} />
            {[
              { icon: Target, label: "Customised", x: "50%", y: "6%" },
              { icon: Gauge, label: "Outcome-driven", x: "92%", y: "32%" },
              { icon: Layers, label: "Three Methods", x: "78%", y: "90%" },
              { icon: Handshake, label: "Partnership", x: "22%", y: "90%" },
              { icon: Globe2, label: "Global Standards", x: "8%", y: "32%" },
            ].map(({ icon: Icon, label, x, y }, i) => (
              <button
                type="button"
                key={label}
                className="group absolute found-card cursor-pointer rounded-xl bg-navy text-primary-foreground border border-gold/30 px-3 py-2.5 w-32 text-center road-node -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:-translate-y-[calc(50%+4px)] hover:border-gold hover:shadow-gold hover:bg-navy-deep focus:outline-none focus:ring-2 focus:ring-gold/60"
                style={{ left: x, top: y, animationDelay: `${i * 0.12}s` }}
              >
                <Icon className="found-icon text-gold mx-auto mb-1.5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" size={18} />
                <p className="text-xs font-semibold tracking-wide">{label}</p>
              </button>
            ))}
          </div>

          {/* Mobile: clean grid with central hub */}
          <div className="md:hidden">
            <div className="mx-auto h-32 w-32 rounded-full bg-gold-gradient shadow-gold flex items-center justify-center text-navy-deep text-center mb-8 found-card">
              <div>
                <p className="font-display text-xl leading-tight">TDS Global</p>
                <p className="text-[9px] uppercase tracking-[0.3em] mt-1 opacity-80">Edge</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Target, label: "Customised" },
                { icon: Gauge, label: "Outcome-driven" },
                { icon: Layers, label: "Three Methods" },
                { icon: Handshake, label: "Partnership" },
                { icon: Globe2, label: "Global Standards" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`found-card cursor-pointer rounded-2xl bg-navy text-primary-foreground border border-gold/30 px-4 py-4 text-center road-node ${i === 4 ? "col-span-2" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Icon className="found-icon text-gold mx-auto mb-2" size={22} />
                  <p className="text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-narrow grid md:grid-cols-2 gap-6">
          {reasons.map(([n, t, d]) => (
            <div key={n} className="p-8 rounded-2xl border border-border bg-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <span className="text-5xl font-display text-gradient-gold">{n}</span>
              <h3 className="mt-4 text-2xl font-display text-navy">{t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-narrow grid lg:grid-cols-2 gap-16 items-center">
          <img src={whyTds} alt="TDS Global audience engaged at a corporate transformation summit" loading="lazy" decoding="async" className="rounded-2xl shadow-elegant w-full aspect-[4/5] object-cover" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Who We Work With</p>
            <h2 className="text-4xl md:text-5xl font-display leading-tight">
              We partner with organisations <span className="italic">serious about building leaders.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              TDS Global works with forward-thinking organisations that understand one fundamental
              truth: their greatest competitive advantage is their people.
            </p>

            <h3 className="mt-10 font-display text-xl text-navy">We work with</h3>
            <ul className="mt-4 space-y-3">
              {workWith.map((w) => (
                <li key={w} className="flex gap-3">
                  <Check className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span className="text-foreground/85">{w}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl text-navy">We are the right partner if you are</h3>
            <ul className="mt-4 space-y-3">
              {rightPartner.map((w) => (
                <li key={w} className="flex gap-3">
                  <Check className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span className="text-foreground/85">{w}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="group mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-primary-foreground font-medium border border-gold/40 shadow-elegant transition-all duration-300 hover:bg-gold-gradient hover:text-navy-deep hover:-translate-y-0.5 hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-gold/60">
              Become a partner <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
