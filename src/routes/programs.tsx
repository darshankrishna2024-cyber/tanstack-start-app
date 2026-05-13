import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";
import p1 from "@/assets/photos/p1.webp";
import p2 from "@/assets/photos/p2.webp";
import p4 from "@/assets/photos/p4.webp";
import p5 from "@/assets/photos/p5.webp";
import p6 from "@/assets/photos/p6.webp";
import p8 from "@/assets/photos/p8.webp";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — TDS Global Leadership & Team Transformation" },
      {
        name: "description",
        content:
          "Explore TDS Global programs: Leadership Forge, Outbound Leadership Expedition, Mindset Shift, First-Time Manager, High Performance Team, Executive Presence.",
      },
      { property: "og:title", content: "TDS Global Programs" },
      {
        property: "og:description",
        content:
          "Customised, outcome-driven corporate training programs delivered through classroom, outbound and experiential methodologies.",
      },
      { property: "og:url", content: "https://elevate-potential-studio.lovable.app/programs" },
    ],
    links: [
      { rel: "canonical", href: "https://elevate-potential-studio.lovable.app/programs" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            "Leadership Forge Program",
            "Outbound Leadership Expedition",
            "Mindset Shift Workshop",
            "First-Time Manager Program",
            "High Performance Team Program",
            "Executive Presence Masterclass",
          ].map((name, i) => ({
            "@type": "Service",
            position: i + 1,
            name,
            serviceType: "Corporate Training",
            provider: { "@type": "Organization", name: "TDS Global Consultancy" },
            areaServed: ["IN", "AE", "SG", "GB", "US"],
          })),
        }),
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    n: "01",
    title: "Leadership Forge Program",
    audience: "Mid to Senior Managers",
    method: "Classroom + Experiential",
    body: "The flagship TDS Global offering. A high-intensity leadership development journey that challenges managers to confront their blind spots, sharpen their decision-making, and emerge as leaders who inspire rather than instruct.",
    img: p5,
  },
  {
    n: "02",
    title: "Outbound Leadership Expedition",
    audience: "Teams + Managers",
    method: "Outbound + Structured Reflection",
    body: "Leadership happens under pressure. This program takes participants out of the boardroom and into real terrain — using outdoor challenges, team dynamics, and deep reflection to permanently shift how people lead, collaborate, and perform.",
    img: p2,
  },
  {
    n: "03",
    title: "Mindset Shift Workshop",
    audience: "All Management Levels",
    method: "Classroom + Group Coaching",
    body: "The most significant barrier to performance is not skill — it is mindset. This intensive workshop dismantles limiting beliefs, reframes challenges, and builds the mental resilience modern leaders need to thrive under pressure.",
    img: p4,
  },
  {
    n: "04",
    title: "First-Time Manager Program",
    audience: "New & Emerging Managers",
    method: "Classroom + Simulation",
    body: "The transition from individual contributor to manager is one of the most critical — and most under-supported — moments in a professional's career. This program equips first-time managers with the mindset, tools, and confidence to lead from day one.",
    img: p6,
  },
  {
    n: "05",
    title: "High Performance Team Program",
    audience: "Cross-Functional Teams",
    method: "Experiential + Outbound",
    body: "High-performing teams are built on trust, clarity, and shared accountability. This program breaks down silos, resolves conflict, aligns purpose, and creates teams that perform at their collective best — consistently.",
    img: p1,
  },
  {
    n: "06",
    title: "Executive Presence Masterclass",
    audience: "Senior Leaders",
    method: "Classroom + 1:1 Coaching",
    body: "Presence is not personality. It is a skill. This masterclass develops the communication authority, strategic gravitas, and influential leadership behaviours that define executives who command respect in any room.",
    img: p8,
  },
];

function Programs() {
  return (
    <PageShell>
      <PageHero
        variant="programs"
        eyebrow="What We Deliver"
        title="Every program is built around one question — what specific transformation does this organisation need?"
        subtitle="Our answers are always customised, always experiential, and always outcome-driven."
      />

      <section className="py-20 bg-background">
        <div className="container-narrow space-y-20">
          {programs.map((p, i) => (
            <article
              key={p.n}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-last" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={`${p.title} — TDS Global`}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-elegant"
                />
                <span className="absolute -top-5 -left-5 bg-gold-gradient text-navy-deep px-4 py-2 rounded-lg font-mono font-semibold shadow-gold">
                  {p.n}
                </span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">{p.title}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs uppercase tracking-wider">
                    {p.audience}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-navy text-primary-foreground text-xs uppercase tracking-wider">
                    {p.method}
                  </span>
                </div>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{p.body}</p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all"
                >
                  Enquire about this program <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical & Specialised Programs */}
      <section className="py-20 bg-secondary/30">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Technical & Specialised</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display text-foreground leading-tight">
              Industry-relevant technical training alongside our transformational programs
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background shadow-elegant">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-navy text-primary-foreground text-xs uppercase tracking-wider font-semibold">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Program</div>
              <div className="col-span-3">Target Audience</div>
              <div className="col-span-3">Methodology</div>
            </div>
            {[
              { n: "T1", title: "MS Excel & Data Skills Training", audience: "All Staff Levels", method: "Classroom + Hands-On" },
              { n: "T2", title: "Workplace Safety & HSE Training", audience: "Shop Floor to Supervisors", method: "Classroom + Simulation" },
              { n: "T3", title: "Industrial Safety & Compliance", audience: "Plant & Operations Teams", method: "Classroom + On-Site" },
              { n: "T4", title: "Quality & Process Excellence", audience: "Operations & QA Teams", method: "Classroom + Practicum" },
              { n: "T5", title: "Customer Service Excellence", audience: "Front-Line & Service Teams", method: "Classroom + Role Play" },
              { n: "T6", title: "Sales & Key Account Management", audience: "Sales Teams & Managers", method: "Classroom + Field Practice" },
              { n: "T7", title: "Effective Business Communication", audience: "All White-Collar Professionals", method: "Classroom + Coaching" },
              { n: "T8", title: "Train the Trainer (TTT) Program", audience: "Internal Trainers & Coaches", method: "Classroom + Certification" },
            ].map((t, i) => (
              <div
                key={t.n}
                className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 items-start md:items-center ${
                  i !== 0 ? "border-t border-border" : ""
                } hover:bg-secondary/40 transition-colors`}
              >
                <div className="md:col-span-1">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-navy text-primary-foreground font-mono text-sm font-semibold">
                    {t.n}
                  </span>
                </div>
                <div className="md:col-span-5 font-semibold text-foreground">{t.title}</div>
                <div className="md:col-span-3 text-sm text-muted-foreground">
                  <span className="md:hidden font-semibold text-foreground/80">Audience: </span>{t.audience}
                </div>
                <div className="md:col-span-3 text-sm italic text-gold">
                  <span className="md:hidden not-italic font-semibold text-foreground/80">Method: </span>{t.method}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Network & Delivery */}
      <section className="py-20 bg-background">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Trainer Network & Delivery</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display text-foreground leading-tight">
              Experienced practitioners — <span className="italic text-gradient-gold">not just trainers</span>
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Our Trainers",
                accent: "bg-navy text-primary-foreground",
                items: [
                  "Certified, experienced facilitators",
                  "Behavioural & Leadership specialists",
                  "Outbound & Experiential experts",
                  "Real-world corporate practitioners",
                  "Multilingual delivery capability",
                ],
              },
              {
                title: "Delivery Modes",
                accent: "bg-gold-gradient text-navy-deep",
                items: [
                  "In-house Corporate Programs",
                  "Outbound Training Expeditions",
                  "Open House Workshops",
                  "Virtual & Webinar Programs",
                  "Long-Term Leadership Interventions",
                ],
              },
              {
                title: "Our Quality Promise",
                accent: "bg-navy text-primary-foreground",
                items: [
                  "Pre-training needs assessment",
                  "Customised content per client",
                  "Pre & post program evaluation",
                  "Individual performance reports",
                  "Post-training reinforcement & follow-up",
                ],
              },
            ].map((col) => (
              <div key={col.title} className="rounded-2xl overflow-hidden border border-border bg-background shadow-elegant flex flex-col">
                <div className={`px-6 py-4 ${col.accent}`}>
                  <h3 className="font-display text-xl">{col.title}</h3>
                </div>
                <ul className="p-6 space-y-4 flex-1">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-foreground/90">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-display max-w-2xl mx-auto">
            Don't see exactly what you need? <span className="text-gradient-gold italic">Good.</span>
          </h2>
          <p className="mt-5 text-primary-foreground/75 max-w-xl mx-auto">
            Every TDS Global program is customised. Tell us your challenge — we'll design the program.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold">
            Build my program <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
