import { useEffect } from "react";

export const SITE_URL = "https://impulse69.github.io/ijw-labs-site";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Per-page title/description/canonical/OG — baked into static HTML by the prerenderer. */
export function usePageMeta({ title, description, path }) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", SITE_URL + path);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", SITE_URL + path);
  }, [title, description, path]);
}

/** Inject JSON-LD structured data for the current page. */
export function JsonLd({ data }) {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(data);
    el.dataset.jsonld = "page";
    document.head.appendChild(el);
    return () => el.remove();
  }, [data]);
  return null;
}

export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "IJW Labs",
  slogan: "Smart Solutions. Stronger Presence. Real Growth.",
  description:
    "IJW Labs is a digital agency in Accra, Ghana offering web development, systems development and professional photo editing for growing businesses.",
  url: SITE_URL + "/",
  telephone: "+233539923975",
  address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
  areaServed: ["Ghana", "Worldwide (remote)"],
  founder: [
    { "@type": "Person", name: "Isaac Asamoah" },
    { "@type": "Person", name: "Judah B. Amanor" },
    { "@type": "Person", name: "Wisdom Dzanado" },
  ],
  sameAs: ["https://www.instagram.com/ijw_labs", "https://x.com/ijwlabs"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Business websites, online stores, booking flows — fast, mobile-first, conversion-focused." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Systems Development", description: "Custom inventory, bookings, records and billing systems for small businesses." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photo Editing", description: "Professional product, portrait and promotional photo retouching." } },
  ],
};

// Visible on Home + emitted as FAQPage JSON-LD: this is the AEO surface.
export const FAQS = [
  {
    q: "How much does a website cost in Ghana?",
    a: "Every IJW Labs quote is custom — a one-page business site costs far less than an online store. Message us on WhatsApp (+233 53 992 3975) with your budget range and we'll tell you honestly what it gets you. No obligation, quote within 48 hours.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A focused business website typically takes 1–3 weeks at IJW Labs. Larger builds like stores or custom systems take longer — you get a clear timeline with your quote before any work starts.",
  },
  {
    q: "Do you only work with businesses in Accra?",
    a: "No. IJW Labs is based in Accra, Ghana, but we work remotely with clients anywhere. Most projects run entirely over WhatsApp — brief, progress updates, delivery.",
  },
  {
    q: "What do you need from me to start?",
    a: "Just a WhatsApp message describing your business and what you need. Logos, photos and text help, but we can guide you through all of it — our photo editing service covers visuals too.",
  },
  {
    q: "Do you maintain the website after launch?",
    a: "Yes. Dedicated support is part of every IJW Labs project — updates, fixes and questions after launch are included, and we stay reachable on WhatsApp.",
  },
];

export const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
