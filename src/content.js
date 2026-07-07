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

// Real hotel websites IJW built across Ghana's Eastern Region — each tile links
// to the live site. `featured: true` = shown on Home + top of the About grid.
// To add a project: screenshot it into public/images/work/<slug>.jpg, run
// mockups/portfolio_variants.py, then add a row here.
export const PORTFOLIO = [
  { slug: "eastern-premier-hotel", title: "Eastern Premier Hotel", tag: "Hotel · Koforidua", url: "https://eastern-premier-hotel-koforidua.netlify.app/", featured: true },
  { slug: "freden-hotel-koforidua", title: "Freden Hotel", tag: "Hotel · Koforidua", url: "https://freden-hotel-koforidua.netlify.app/", featured: true },
  { slug: "little-acre-hotel-aburi", title: "Little Acre Hotel", tag: "Hotel · Aburi", url: "https://little-acre-hotel-aburi.netlify.app/", featured: true },
  { slug: "yaven-heights-koforidua", title: "Yaven Heights", tag: "Hotel · Koforidua", url: "https://yaven-heights-koforidua.netlify.app/", featured: true },
  { slug: "dear-home-hotel-koforidua", title: "Dear Home Hotel", tag: "Hotel · Koforidua", url: "https://dear-home-hotel-koforidua.netlify.app/", featured: true },
  { slug: "modak-royal-hotel-kwahu", title: "Modak Royal Hotel", tag: "Hotel · Kwahu", url: "https://modak-royal-hotel-kwahu.netlify.app/", featured: true },
  { slug: "palm-hill-hotel-akropong", title: "Palm Hill Hotel", tag: "Hotel · Akropong", url: "https://palm-hill-hotel-akropong.netlify.app/" },
  { slug: "akosombo-continental-hotel", title: "Akosombo Continental Hotel", tag: "Hotel · Atimpoku", url: "https://akosombo-continental-hotel.netlify.app/" },
  { slug: "bright-hotel-suites-koforidua", title: "Bright Hotel & Suites", tag: "Hotel · Effiduase", url: "https://bright-hotel-suites-koforidua.netlify.app/" },
  { slug: "vip-lodge-mamfe", title: "VIP Lodge", tag: "Lodge · Mamfe", url: "https://vip-lodge-mamfe.netlify.app/" },
  { slug: "kyerewaa-hotel-akwatia", title: "Kyerewaa Hotel", tag: "Hotel · Akwatia", url: "https://kyerewaa-hotel-akwatia.netlify.app/" },
  { slug: "filifaf-hotel-koforidua", title: "FilifaF Hotel", tag: "Hotel · Koforidua", url: "https://filifaf-hotel-koforidua.netlify.app/" },
  { slug: "koforidua-guest-house", title: "Koforidua Guest Hotel", tag: "Guest house · Old Estate", url: "https://koforidua-guest-house.netlify.app/" },
  { slug: "translinks-hotel-koforidua", title: "Translinks Hotel", tag: "Hotel · Koforidua", url: "https://translinks-hotel-koforidua.netlify.app/" },
  { slug: "lasanto-hotel-larteh", title: "Lasanto Hotel", tag: "Hotel · Larteh", url: "https://lasanto-hotel-larteh.netlify.app/" },
  { slug: "magjon-hotel-okorase", title: "MagJohn Hotel", tag: "Hotel · Okorase", url: "https://magjon-hotel-okorase.netlify.app/" },
  { slug: "oak-guest-house-koforidua", title: "Oak Guest House", tag: "Guest house · Asokore", url: "https://oak-guest-house-koforidua.netlify.app/" },
  { slug: "stopping-point-hotel-anyinam", title: "Stopping Point Hotel", tag: "Hotel · Anyinam", url: "https://stopping-point-hotel-anyinam.netlify.app/" },
  { slug: "renes-hotel-koforidua", title: "Rene's Hotel", tag: "Hotel · Koforidua", url: "https://renes-hotel-koforidua.netlify.app/" },
].map((p) => ({ ...p, img: `work/${p.slug}.jpg` }));

// Featured tiles (Home "recent work" + top of About grid).
export const WORK = PORTFOLIO.filter((p) => p.featured);

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
