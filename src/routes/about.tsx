import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import p1 from "@/assets/photos/p1.webp";
import p2 from "@/assets/photos/p2.webp";
import p3 from "@/assets/photos/p3.webp";
import p4 from "@/assets/photos/p4.webp";
import p5 from "@/assets/photos/p5.webp";
import p6 from "@/assets/photos/p6.webp";
import p7 from "@/assets/photos/p7.webp";
import p8 from "@/assets/photos/p8.webp";
import founder from "@/assets/founder.webp";
import about1 from "@/assets/about-1.webp";
import about2 from "@/assets/about-2.webp";
import { Eye, Target, Heart, Award, GraduationCap, Users, Linkedin, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TDS Global — Premium Corporate Training Partner" },
      {
        name: "description",
        content:
          "TDS Global is a premium corporate training and human transformation company headquartered in India, delivering customised leadership development worldwide.",
      },
      { property: "og:title", content: "About TDS Global" },
      {
        property: "og:description",
        content:
          "Headquartered in India, designed for the world. Discover our vision, mission and values.",
      },
      { property: "og:url", content: "https://elevate-potential-studio.lovable.app/about" },
    ],
    links: [
      { rel: "canonical", href: "https://elevate-potential-studio.lovable.app/about" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arul Prakash",
          jobTitle: "Founder & Master Trainer",
          worksFor: { "@type": "Organization", name: "TDS Global Consultancy" },
          award: "Best HR Leader — FICCI",
          alumniOf: "IIPE Canada",
          sameAs: ["https://www.linkedin.com/in/arulprakashd/"],
        }),
      },
    ],
  }),
  component: About,
});

const values = [
  ["Transform", "We go beyond knowledge transfer. We create permanent behavioural change in every individual."],
  ["Develop", "We build capability from the inside out — mindset first, skills second."],
  ["Scale", "We design programs that grow with your people and your organisation."],
  ["Customise", "No two clients are the same. No two programs are the same. Ever."],
  ["Challenge", "We push people into discomfort — because that is where real growth lives."],
  ["Integrity", "We only promise what we can deliver, and we deliver what we promise."],
] as const;

function About() {
  return (
    <PageShell>
      <PageHero
        variant="about"
        eyebrow="Who We Are"
        title="Real growth doesn't happen in a classroom. It happens when people are stretched."
        subtitle="TDS Global is a premium corporate training and human development company built on one fundamental belief — and a refusal to deliver anything less than transformation."
      />

      {/* Founder section */}
      <section className="relative py-28 md:py-36 bg-navy-deep text-primary-foreground overflow-hidden">
        {/* Animated decorative orbits */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full border border-gold/15 founder-orbit-slow" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[34rem] w-[34rem] rounded-full border border-gold/10 founder-orbit-reverse" />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--gold) 18%, transparent) 0%, transparent 55%)",
          }}
        />

        <div className="container-narrow relative grid lg:grid-cols-12 gap-14 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5 relative founder-reveal">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-full border border-gold/30 founder-ring" />
              <div className="absolute -inset-8 rounded-full border border-gold/10 founder-ring-reverse" />
              <div className="absolute inset-0 rounded-full bg-gold-gradient blur-3xl opacity-25" />
              <div className="relative rounded-full overflow-hidden border-[3px] border-gold/60 shadow-gold aspect-square bg-cream">
                <img
                  src={founder}
                  alt="Arul Prakash, Founder & Master Trainer of TDS Global Consultancy"
                  className="h-full w-full object-cover object-top founder-portrait"
                />
              </div>
              <div className="absolute -right-4 -bottom-2 md:-right-8 bg-gold-gradient text-navy-deep px-5 py-3 rounded-2xl shadow-gold founder-float">
                <p className="text-2xl font-display leading-none">500+</p>
                <p className="text-[10px] uppercase tracking-[0.25em] mt-1">Programs Delivered</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 founder-reveal-delay">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              Meet the Founder
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05]">
              Arul Prakash
            </h2>
            <p className="mt-3 text-gold/90 text-lg italic font-display">
              Founder &amp; Master Trainer
            </p>

            <div className="mt-8 relative pl-6 border-l border-gold/40">
              <Quote className="absolute -left-3 -top-2 text-gold bg-navy-deep p-1" size={22} />
              <p className="text-lg md:text-xl font-display italic text-primary-foreground/90 leading-snug">
                "His work is not conventional training — it is transformation by design."
              </p>
            </div>

            <div className="mt-8 space-y-4 text-primary-foreground/80 leading-relaxed">
              <p>
                Arul Prakash is a visionary in leadership transformation, redefining how individuals
                and organizations unlock their highest potential. As the Founder and Master Trainer,
                he brings a rare blend of strategic insight, behavioral science, and immersive
                learning design to create powerful, lasting change.
              </p>
              <p>
                Having delivered over <span className="text-gold font-semibold">500+ high-impact
                programs</span> and engaged with top leaders across industries, Arul is recognized
                for crafting deeply experiential learning journeys that challenge thinking, shift
                mindsets, and elevate performance. His methodologies combine NLP, psychology, and
                real-world leadership dynamics to produce measurable outcomes at both individual
                and organizational levels.
              </p>
              <p>
                Every engagement under his leadership is built with precision, intent, and a
                singular focus — creating leaders who influence, inspire, and drive meaningful
                change.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Award, label: "Best HR Leader", sub: "Recognised by FICCI" },
                { icon: GraduationCap, label: "Certified", sub: "Experiential Design · IIPE Canada" },
                { icon: Users, label: "500+ Programs", sub: "Across industries globally" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div
                  key={label}
                  className="founder-credential rounded-xl border border-gold/20 bg-white/5 backdrop-blur-sm p-4 hover:border-gold/60 hover:bg-white/10 transition-colors"
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <Icon className="text-gold mb-2" size={20} />
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-xs text-primary-foreground/60 mt-1">{sub}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/arulprakashd/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:scale-[1.03] transition-transform"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-narrow grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-gold mb-5 font-semibold">
              <span className="inline-block h-px w-10 bg-gold align-middle mr-3" />
              Who We Partner With
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05] text-navy">
              We are not a training vendor. <span className="italic text-gradient-gold">We are a transformation partner.</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                We work with mid-level managers, white-collar professionals, and all levels of
                leadership across industries — designing and delivering customised programs that
                go far beyond conventional training. Every program we build is tailored to the
                specific challenges, culture, and ambitions of the organisation we serve.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={about1} alt="TDS Global founder presenting a bouquet at a corporate transformation event" loading="lazy" decoding="async" className="rounded-2xl shadow-elegant w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-gold-gradient text-navy-deep p-6 rounded-2xl shadow-gold max-w-xs">
              <p className="text-3xl font-display">India · Asia · Beyond</p>
              <p className="text-sm mt-1 opacity-80">Global delivery capability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="py-24 bg-secondary">
        <div className="container-narrow grid lg:grid-cols-2 gap-16 items-center">
          <img src={about2} alt="TDS Global founder presenting Mypreneur recognition on stage" loading="lazy" decoding="async" className="rounded-2xl shadow-elegant w-full aspect-[4/3] object-cover order-last lg:order-first" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Founding Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-display leading-tight">Why TDS Global Exists</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              The corporate training industry is full of programs that inform but never truly
              transform. Content is delivered, workshops are checked off, and organisations
              return to the same patterns the following Monday. TDS Global was created to break
              that cycle.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We bring together classroom learning, outbound experiences, and experiential
              methodologies to create training that sticks — behaviourally, emotionally, and
              professionally. Our programs are measured not by attendance, but by outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.5em] text-gold mb-6 font-semibold">
              <span className="inline-block h-px w-12 bg-gold align-middle mr-3" />
              Our Foundation
              <span className="inline-block h-px w-12 bg-gold align-middle ml-3" />
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05]">
              Vision, Mission &amp; <span className="italic text-gradient-gold">Core Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="found-card group p-10 rounded-2xl bg-navy text-primary-foreground shadow-elegant cursor-pointer">
              <Eye className="found-icon text-gold mb-4 group-hover:rotate-12 transition-transform duration-500" size={32} />
              <h3 className="text-xs uppercase tracking-[0.3em] text-gold group-hover:text-navy-deep mb-3 transition-colors">Vision</h3>
              <p className="text-xl md:text-2xl font-display leading-snug">
                To be the most trusted global partner in human transformation — building leaders
                who create lasting impact in their organisations and communities.
              </p>
            </div>
            <div className="found-card group p-10 rounded-2xl bg-navy text-primary-foreground shadow-elegant cursor-pointer">
              <Target className="found-icon text-gold mb-4 group-hover:rotate-12 transition-transform duration-500" size={32} />
              <h3 className="text-xs uppercase tracking-[0.3em] text-gold group-hover:text-navy-deep mb-3 transition-colors">Mission</h3>
              <p className="text-xl md:text-2xl font-display leading-snug">
                We design and deliver customised transformational experiences that permanently
                shift behaviour, develop leadership capability, and scale growth.
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-3 font-semibold">The Six Pillars</p>
            <h3 className="text-4xl md:text-5xl font-display text-navy">Core Values</h3>
            <p className="mt-4 text-muted-foreground">Tap any value to feel what drives us.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(([k, v]) => (
              <div key={k} tabIndex={0} className="found-card group p-7 rounded-2xl border border-border bg-navy text-primary-foreground cursor-pointer outline-none">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="found-icon text-gold group-hover:scale-125 transition-transform" size={20} />
                  <h4 className="font-display text-2xl">{k}</h4>
                </div>
                <p className="text-sm opacity-85 leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments Gallery */}
      <section className="py-24 bg-secondary">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.5em] text-gold mb-5 font-semibold">
              <span className="inline-block h-px w-12 bg-gold align-middle mr-3" />
              In the Field
              <span className="inline-block h-px w-12 bg-gold align-middle ml-3" />
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-navy">
              Moments of <span className="italic text-gradient-gold">transformation.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">A glimpse into our programs, people, and the work we do across India and beyond.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[p1, p2, p3, p4, p5, p6, p7, p8].map((src, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl shadow-elegant ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              >
                <img
                  src={src}
                  alt={`TDS Global program moment ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
