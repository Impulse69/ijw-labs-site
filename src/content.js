// ─── Edit this file to update site content (no code knowledge needed) ───────
export const WHATSAPP = "233539923975";
export const waLink = (text) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const SOCIALS = {
  instagram: "https://www.instagram.com/ijw_labs",
  x: "https://x.com/ijwlabs",
  snapchat: "https://www.snapchat.com/add/ijwlabs",
};

// Founders — replace names/roles/bios with the real ones.
// Photos: drop founder-1.jpg, founder-2.jpg, founder-3.jpg into public/images/
export const FOUNDERS = [
  {
    img: "founder-1.png",
    name: "Isaac Asamoah",
    role: "Co-founder",          // ← EDIT when roles are decided, e.g. "Lead Developer"
    bio: "",                     // ← EDIT one line: what he builds + one human detail
  },
  {
    img: "founder-2.png",
    name: "Judah B. Amanor",
    role: "Co-founder",
    bio: "",
  },
  {
    img: "founder-3.png",
    name: "Wisdom Dzanado",
    role: "Co-founder",
    bio: "",
  },
];

// Work samples — replace captions; drop work-1.jpg … work-6.jpg into public/images/
export const WORK = [
  { img: "work-1.jpg", title: "Project title", tag: "Web Development" },
  { img: "work-2.jpg", title: "Project title", tag: "Systems Development" },
  { img: "work-3.jpg", title: "Project title", tag: "Photo Editing" },
  { img: "work-4.jpg", title: "Project title", tag: "Documentation" },
  { img: "work-5.jpg", title: "Project title", tag: "Web Development" },
  { img: "work-6.jpg", title: "Project title", tag: "Photo Editing" },
];

export const SERVICES = [
  {
    slug: "web",
    img: "service-web.jpg",
    title: "Web Development",
    short: "Websites that work as hard as you do — fast, mobile-first, built to turn visitors into customers.",
    points: ["Business websites & landing pages", "Online stores", "Booking & ordering flows", "Hosting, domains & maintenance"],
    pitch: "Your business, open 24/7.",
  },
  {
    slug: "systems",
    img: "service-systems.jpg",
    title: "Systems Development",
    short: "Custom tools that kill the paperwork — software shaped around how your business actually runs.",
    points: ["Inventory & stock systems", "Bookings, records & billing", "Dashboards & reporting", "Automation of repetitive work"],
    pitch: "Less admin, more business.",
  },
  {
    slug: "photo",
    img: "service-photo.jpg",
    title: "Photo Editing",
    short: "Product shots, portraits and promo visuals polished to a professional standard.",
    points: ["Product photography retouch", "Portraits & headshots", "Promo & social media visuals", "Batch editing for catalogs"],
    pitch: "Look as good as you are.",
  },
  {
    slug: "docs",
    img: "service-docs.jpg",
    title: "Documentation Works",
    short: "Proposals, profiles, reports and presentations that read clean and look sharp.",
    points: ["Company profiles & proposals", "Reports & presentations", "Letterheads & templates", "CVs & application documents"],
    pitch: "Paperwork that performs.",
  },
];
