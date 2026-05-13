import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import h1 from "@/assets/hero/h1.webp";
import h2 from "@/assets/hero/h2.webp";
import h3 from "@/assets/hero/h3.webp";
import h4 from "@/assets/hero/h4.webp";
import h5 from "@/assets/hero/h5.webp";
import h6 from "@/assets/hero/h6.webp";
import h7 from "@/assets/hero/h7.webp";
import h8 from "@/assets/hero/h8.webp";

const slides = [h1, h2, h3, h4, h5, h6, h7, h8];

export function HeroMontage() {
  return (
    <section className="relative min-h-[100svh] flex items-center text-primary-foreground overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {slides.map((src, i) => (
          <div
            key={i}
            className="slide-layer absolute inset-0"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animationDelay: `${(i * (slides.length * 5)) / slides.length}s`,
              animationDuration: `${slides.length * 5}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep/70" />
      </div>

      {/* Left-anchored content — same gutter as header */}
      <div className="relative w-full px-6 md:px-10 lg:px-16 xl:px-24 py-20 md:py-24">
        <div className="max-w-[640px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm mb-6 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold">Transform · Develop · Scale</span>
          </div>

          <h1 className="text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl font-display animate-fade-up">
            We Don't Train People.
            <br />
            <span className="text-gradient-gold italic">We Transform Them.</span>
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-primary-foreground/85 max-w-xl leading-relaxed animate-fade-up">
            TDS Global is a premium corporate training company specialising in customised
            transformational programs that deliver real behavioural change across organisations worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:gap-4 animate-fade-up">
            <Link
              to="/programs"
              className="group inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-4 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:shadow-elegant transition-all"
            >
              Explore Programs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-4 rounded-full border border-white/30 backdrop-blur-sm text-primary-foreground hover:bg-white/10 transition-colors font-medium"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
