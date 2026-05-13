import { Link } from "@tanstack/react-router";
import logo from "@/assets/tds-logo.png";
import { Mail, Globe, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground mt-24">
      <div className="container-narrow py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="bg-cream inline-block rounded-lg p-3">
            <img src={logo} alt="TDS Global" loading="lazy" decoding="async" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
            TDS Global Consultancy is a premium corporate training and human transformation
            company headquartered in Chennai, India. Transform. Develop. Scale.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">
            Beyond Training. Into Transformation.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-gold">Programs</Link></li>
            <li><Link to="/why-tds" className="hover:text-gold">Why TDS Global</Link></li>
            <li><Link to="/approach" className="hover:text-gold">Our Approach</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Get in touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-gold flex-shrink-0" /><a href="mailto:connect@tdsgconsultancy.com" className="hover:text-gold">connect@tdsgconsultancy.com</a></li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-gold flex-shrink-0" /><a href="mailto:arul@tdsgconsultancy.com" className="hover:text-gold">arul@tdsgconsultancy.com</a></li>
            <li className="flex items-start gap-2"><Globe size={16} className="mt-0.5 text-gold flex-shrink-0" /><a href="https://www.tdsgconsultancy.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">www.tdsgconsultancy.com</a></li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-gold" /> <a href="tel:+919789916414" className="hover:text-gold">+91 97899 16414</a></li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold flex-shrink-0" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=TDS+Global+Consultancy+Nehru+St+Padi+Chennai+600050"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold not-italic"
              >
                Nehru St, Mathiyazhagan Nagar,<br />
                TMP Nagar, Padi, Chennai,<br />
                Tamil Nadu 600050, India
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} TDS Global. All rights reserved.</p>
          <p>Transform · Develop · Scale</p>
        </div>
      </div>
      <div className="border-t border-white/10 bg-navy-deep">
        <div className="container-narrow py-3 text-center text-xs text-primary-foreground/60">
          Crafted by{" "}
          <a
            href="https://innovvx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline font-medium"
          >
            Innovvx Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
