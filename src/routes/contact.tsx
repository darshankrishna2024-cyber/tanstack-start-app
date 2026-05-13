import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ADDRESS = "TDS Global Consultancy, Nehru St, Mathiyazhagan Nagar, TMP Nagar, Padi, Chennai, Tamil Nadu 600050";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TDS Global — Corporate Training, Chennai" },
      {
        name: "description",
        content:
          "Contact TDS Global Consultancy in Padi, Chennai for customised corporate leadership and team transformation programs. We respond within 24 hours.",
      },
      {
        name: "keywords",
        content:
          "corporate training Chennai, TDS Global Consultancy contact, leadership training Chennai, training company Padi Chennai, L&D partner Tamil Nadu, executive coaching India",
      },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Chennai" },
      { name: "geo.position", content: "13.0997;80.1953" },
      { name: "ICBM", content: "13.0997, 80.1953" },
      { property: "og:title", content: "Contact TDS Global Consultancy — Chennai, India" },
      {
        property: "og:description",
        content:
          "Visit us at Nehru St, Padi, Chennai 600050. Tell us your challenge — we'll tell you how we solve it.",
      },
      { property: "og:type", content: "website" },
      { property: "business:contact_data:street_address", content: "Nehru St, Mathiyazhagan Nagar, TMP Nagar, Padi" },
      { property: "business:contact_data:locality", content: "Chennai" },
      { property: "business:contact_data:region", content: "Tamil Nadu" },
      { property: "business:contact_data:postal_code", content: "600050" },
      { property: "business:contact_data:country_name", content: "India" },
      { property: "og:url", content: "https://elevate-potential-studio.lovable.app/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://elevate-potential-studio.lovable.app/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "TDS Global Consultancy",
          image: "https://tdsglobal.com/og.jpg",
          telephone: "+91-97899-16414",
          email: "connect@tdsgconsultancy.com",
          url: "https://www.tdsgconsultancy.com",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nehru St, Mathiyazhagan Nagar, TMP Nagar, Padi",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600050",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 13.0997, longitude: 80.1953 },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:30",
              closes: "18:30",
            },
          ],
          areaServed: ["India", "United Arab Emirates", "Singapore", "United Kingdom", "United States"],
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Where is TDS Global Consultancy located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "TDS Global Consultancy is headquartered at Nehru St, Mathiyazhagan Nagar, TMP Nagar, Padi, Chennai, Tamil Nadu 600050, India.",
              },
            },
            {
              "@type": "Question",
              name: "What services does TDS Global Consultancy offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Customised corporate training, leadership development, first-time manager programs, executive presence coaching, outbound team experiences and behavioural transformation programs delivered across India and globally.",
              },
            },
            {
              "@type": "Question",
              name: "How quickly does TDS Global respond to enquiries?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our team responds to every enquiry within 24 hours with a complimentary needs assessment and a customised program proposal.",
              },
            },
            {
              "@type": "Question",
              name: "Does TDS Global deliver training outside Chennai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We are based in Chennai and deliver training programs pan-India and internationally across the UAE, Singapore, UK and US.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <PageShell>
      <PageHero
        variant="contact"
        eyebrow="Contact"
        title="Let's build something real."
        subtitle="If you are serious about transforming your people — not just training them — we want to hear from you. Tell us your challenge. We will tell you how we solve it."
      />

      <section className="py-24 bg-background">
        <div className="container-narrow grid lg:grid-cols-5 gap-12">
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Get in touch</p>
              <h2 className="text-3xl font-display text-navy">TDS Global Consultancy</h2>
              <p className="text-muted-foreground italic mt-1">Transform. Develop. Scale.</p>
            </div>

            <ul className="space-y-5">
              {[
                { icon: Mail, k: "Email", v: (
                  <span className="flex flex-col">
                    <a href="mailto:connect@tdsgconsultancy.com" className="hover:text-gold">connect@tdsgconsultancy.com</a>
                    <a href="mailto:arul@tdsgconsultancy.com" className="hover:text-gold">arul@tdsgconsultancy.com</a>
                  </span>
                ) },
                { icon: Globe, k: "Website", v: <a href="https://www.tdsgconsultancy.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">www.tdsgconsultancy.com</a> },
                { icon: Phone, k: "Phone", v: <a href="tel:+919789916414" className="hover:text-gold">+91 97899 16414</a> },
                {
                  icon: MapPin,
                  k: "Visit Us",
                  v: (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold not-italic"
                    >
                      Nehru St, Mathiyazhagan Nagar,<br />
                      TMP Nagar, Padi,<br />
                      Chennai, Tamil Nadu 600050, India
                    </a>
                  ),
                },
              ].map((c) => (
                <li key={c.k} className="flex gap-4 items-start">
                  <div className="h-11 w-11 rounded-lg bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <c.icon className="text-navy-deep" size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.k}</p>
                    <div className="font-medium text-foreground">{c.v}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl overflow-hidden border border-border shadow-elegant aspect-[4/3]">
              <iframe
                title="TDS Global Consultancy — Padi, Chennai"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="p-6 rounded-2xl bg-navy text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">What happens next</p>
              <ol className="space-y-2 text-sm text-primary-foreground/85 list-decimal pl-5">
                <li>Submit your enquiry or book a discovery call</li>
                <li>Our team responds within 24 hours</li>
                <li>Complimentary needs assessment</li>
                <li>Customised program proposal</li>
                <li>We begin your transformation journey</li>
              </ol>
            </div>
          </aside>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;
              setSubmitting(true);
              setError(null);
              const form = e.currentTarget;
              const formData = new FormData(form);
              try {
                const res = await fetch("https://formsubmit.co/ajax/connect@tdsgconsultancy.com", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: formData,
                });
                if (!res.ok) throw new Error("Network error");
                setSent(true);
                form.reset();
              } catch {
                setError("Something went wrong. Please email connect@tdsgconsultancy.com directly.");
              } finally {
                setSubmitting(false);
              }
            }}
            className="lg:col-span-3 p-8 md:p-10 rounded-2xl border border-border bg-card shadow-elegant space-y-5"
          >
            <h3 className="text-2xl font-display text-navy">Tell us your challenge</h3>
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="New TDS Global enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Role / Designation" name="role" />
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                What transformation are you looking for?
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition resize-none"
                placeholder="Tell us about your team, your goals, and the change you want to see…"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={sent || submitting}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:scale-[1.02] transition-transform disabled:opacity-70"
            >
              {sent
                ? "Thank you — we'll be in touch within 24 hours"
                : submitting
                ? "Sending…"
                : (<>Send enquiry <Send size={16} /></>)}
            </button>
            <p className="text-xs text-muted-foreground">
              By submitting, you agree to be contacted by the TDS Global team. We respond within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition"
      />
    </div>
  );
}
