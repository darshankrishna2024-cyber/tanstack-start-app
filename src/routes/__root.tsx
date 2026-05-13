import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { IntroOverlay } from "@/components/IntroOverlay";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "TDS Global Consultancy, corporate training Chennai, corporate training India, leadership development, executive coaching, outbound training, mindset workshop, first-time manager program, high performance team, executive presence, L&D partner Chennai, transformation training Tamil Nadu",
      },
      { name: "author", content: "TDS Global Consultancy" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Chennai" },
      { name: "geo.position", content: "13.0997;80.1953" },
      { name: "ICBM", content: "13.0997, 80.1953" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "TDS Global Consultancy" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "TDS GLOBAL CONSULTANCY" },
      { property: "og:title", content: "TDS GLOBAL CONSULTANCY" },
      { name: "twitter:title", content: "TDS GLOBAL CONSULTANCY" },
      { name: "description", content: "Arul Prakash Leadership offers transformative leadership development programs designed to unlock individual and organizational potential." },
      { property: "og:description", content: "Arul Prakash Leadership offers transformative leadership development programs designed to unlock individual and organizational potential." },
      { name: "twitter:description", content: "Arul Prakash Leadership offers transformative leadership development programs designed to unlock individual and organizational potential." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f316727-3252-4de2-8276-74d0bfbe87c8/id-preview-0ea2a5fd--a85c832d-5795-4aa6-9d3a-4a3dd934787d.lovable.app-1778649066034.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f316727-3252-4de2-8276-74d0bfbe87c8/id-preview-0ea2a5fd--a85c832d-5795-4aa6-9d3a-4a3dd934787d.lovable.app-1778649066034.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://tdsglobal.com/#org",
              name: "TDS Global Consultancy",
              alternateName: "TDS Global",
              url: "https://tdsglobal.com",
              email: "connect@tdsglobal.com",
              telephone: "+91-97899-16414",
              slogan: "Beyond Training. Into Transformation.",
              foundingLocation: "Chennai, India",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nehru St, Mathiyazhagan Nagar, TMP Nagar, Padi",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600050",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-97899-16414",
                  email: "connect@tdsglobal.com",
                  contactType: "sales",
                  areaServed: ["IN", "AE", "SG", "GB", "US"],
                  availableLanguage: ["en", "ta", "hi"],
                },
              ],
              areaServed: ["India", "United Arab Emirates", "Singapore", "United Kingdom", "United States"],
            },
            {
              "@type": "WebSite",
              "@id": "https://tdsglobal.com/#website",
              url: "https://tdsglobal.com",
              name: "TDS Global Consultancy",
              publisher: { "@id": "https://tdsglobal.com/#org" },
              inLanguage: "en-IN",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <IntroOverlay />
      <Outlet />
    </QueryClientProvider>
  );
}
