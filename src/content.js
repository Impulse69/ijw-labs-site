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
    img: "founder-1.jpg",
    name: "Isaac Asamoah",
    role: "Co-founder & CEO",
    bio: "Sets the vision and owns every client relationship — the first voice you hear at IJW.",
  },
  {
    img: "founder-2.jpg",
    name: "Judah B. Amanor",
    role: "Co-founder & COO",
    bio: "Runs the engine room — timelines, delivery and quality control on every project.",
  },
  {
    img: "founder-3.jpg",
    name: "Wisdom Dzanado",
    role: "Co-founder & Creative Director",
    bio: "Owns the visuals — media, brand and everything that makes IJW work look the part.",
  },
];

// Work tiles — real hotel website designs built by IJW across Ghana's
// Eastern Region. Swap in more real projects (screenshot + honest title) as they land.
export const WORK = [
  { img: "work-1.jpg", title: "Eastern Premier Hotel", tag: "Hotel website · Koforidua" },
  { img: "work-2.jpg", title: "Freden Hotel", tag: "Hotel website · Koforidua" },
  { img: "work-3.jpg", title: "Little Acre Hotel", tag: "Hotel website · Aburi" },
  { img: "work-4.jpg", title: "Yaven Heights", tag: "Hotel website · Koforidua" },
  { img: "work-5.jpg", title: "Dear Home Hotel", tag: "Hotel website · Koforidua" },
  { img: "work-6.jpg", title: "Modak Royal Hotel", tag: "Hotel website · Kwahu" },
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
];
