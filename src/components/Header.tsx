import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/tds-mark.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/why-tds", label: "Why TDS Global" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const onDark = transparent && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : transparent
            ? "bg-transparent"
            : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      {onDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-32 -z-10"
          style={{ background: "linear-gradient(to bottom, rgba(8,12,28,0.55) 0%, rgba(8,12,28,0.25) 55%, transparent 100%)" }}
        />
      )}
      <div className="container-narrow flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3 md:gap-4" aria-label="TDS Global Consultancy home">
          <img
            src={logo}
            alt="TDS Global Consultancy logo"
            className={`h-14 md:h-16 lg:h-20 w-auto object-contain shrink-0 transition-[filter] duration-500 ${
              onDark ? "drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]" : "drop-shadow-sm"
            }`}
          />
          <div className="hidden sm:flex flex-col justify-center leading-none">
            <span className={`font-display text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold transition-colors duration-500 ${
              onDark ? "text-white" : "text-navy"
            }`}>
              TDS GLOBAL
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gold mt-1.5 font-medium">
              Consultancy
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.slice(0, -1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors relative ${
                onDark ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-foreground"
              }`}
              activeProps={{ className: onDark ? "text-white" : "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gold-gradient rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            onDark
              ? "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              : "bg-navy text-primary-foreground hover:bg-navy-deep shadow-elegant"
          }`}
        >
          Talk to Us
          <span className="text-gold">→</span>
        </Link>

        <button
          className={`lg:hidden p-2 transition-colors ${onDark ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md"
                activeProps={{ className: "text-foreground bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
