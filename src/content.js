// ─── Edit this file to update site content (no code knowledge needed) ───────
export const WHATSAPP = "233539923975";
export const CONTACT_EMAIL = "ijwlabs2026@gmail.com";
export const waLink = (text) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const SOCIALS = {
  instagram: "https://www.instagram.com/ijw_labs",
  x: "https://x.com/ijwlabs",
  snapchat: "https://www.snapchat.com/add/ijwlabs",
};

export const FOUNDERS = [
  {
    slug: "isaac-asamoah",
    img: "founder-isaac-20260930.jpg",
    name: "Isaac Asamoah",
    alternateNames: ["Asamoah Isaac"],
    role: "Founder & CEO",
    bio: "Isaac Asamoah leads technical direction and development at IJW Labs. His work spans responsive websites, full-stack applications and interactive web experiences.",
    profileUrl: "https://asamoahisaac.netlify.app/",
    profileLabel: "View Isaac's portfolio",
    linkedinUrl: "https://www.linkedin.com/in/isaac-asamoah-aba780440/",
  },
  {
    slug: "judah-b-amanor",
    img: "founder-2.jpg",
    name: "Judah Amanor Tetteh",
    role: "Co-founder & COO",
    bio: "Judah oversees operations and project delivery at IJW Labs, coordinating timelines and maintaining delivery standards across client engagements.",
    profileUrl: "https://gh.linkedin.com/in/judah-amanor-tetteh-3bb979411",
    profileLabel: "View Judah's LinkedIn profile",
  },
  {
    slug: "wisdom-dzanado",
    img: "founder-3.jpg",
    name: "Wisdom Dzanado",
    role: "Co-founder & Creative Director",
    bio: "Wisdom leads creative direction and visual production at IJW Labs, shaping how client work is presented across digital channels.",
  },
];

// Published platforms, live websites and hospitality design concepts.
// `featured: true` = shown on Home + top of the About grid.
// To add a project: screenshot it into public/images/work/<slug>.jpg, run
// mockups/portfolio_variants.py, then add a row here.
export const PORTFOLIO = [
  { slug: "skuldrop", title: "Skuldrop", tag: "Delivery operations · Live for D Alimachi", url: "https://dalimachi.com/", kind: "project", featured: true, img: "work/skuldrop.png" },
  { slug: "nonna-lodge", title: "Nonna Lodge", tag: "Live hotel website", url: "https://nonna-lodge-site.vercel.app/", kind: "project", featured: true },
  { slug: "eastern-premier-hotel", title: "Eastern Premier Hotel", tag: "Hotel · Koforidua", url: "https://eastern-premier-hotel-koforidua.netlify.app/", featured: true },
  { slug: "freden-hotel-koforidua", title: "Freden Hotel", tag: "Hotel · Koforidua", url: "https://freden-hotel-koforidua.netlify.app/", featured: true },
  { slug: "little-acre-hotel-aburi", title: "Little Acre Hotel", tag: "Hotel · Aburi", url: "https://little-acre-hotel-aburi.netlify.app/", featured: true },
  { slug: "yaven-heights-koforidua", title: "Yaven Heights", tag: "Hotel · Koforidua", url: "https://yaven-heights-koforidua.netlify.app/", featured: true },
  { slug: "modak-royal-hotel-kwahu", title: "Modak Royal Hotel", tag: "Hotel · Kwahu", url: "https://modak-royal-hotel-kwahu.netlify.app/", featured: true },
  { slug: "palm-hill-hotel-akropong", title: "Palm Hill Hotel", tag: "Hotel · Akropong", url: "https://palm-hill-hotel-akropong.netlify.app/" },
  { slug: "bright-hotel-suites-koforidua", title: "Bright Hotel & Suites", tag: "Hotel · Effiduase", url: "https://bright-hotel-suites-koforidua.netlify.app/" },
  { slug: "vip-lodge-mamfe", title: "VIP Lodge", tag: "Lodge · Mamfe", url: "https://vip-lodge-mamfe.netlify.app/" },
  { slug: "kyerewaa-hotel-akwatia", title: "Kyerewaa Hotel", tag: "Hotel · Akwatia", url: "https://kyerewaa-hotel-akwatia.netlify.app/" },
  { slug: "koforidua-guest-house", title: "Koforidua Guest Hotel", tag: "Guest house · Old Estate", url: "https://koforidua-guest-house.netlify.app/" },
  { slug: "lasanto-hotel-larteh", title: "Lasanto Hotel", tag: "Hotel · Larteh", url: "https://lasanto-hotel-larteh.netlify.app/" },
  { slug: "magjon-hotel-okorase", title: "MagJohn Hotel", tag: "Hotel · Okorase", url: "https://magjon-hotel-okorase.netlify.app/" },
].map((p) => ({ ...p, img: p.img || `work/${p.slug}.jpg` }));

// Featured tiles (Home "recent work" + top of About grid).
export const WORK = PORTFOLIO.filter((p) => p.featured);

export const SYSTEMS = [
  {
    slug: "enterprise-resource-planning",
    title: "Enterprise Resource Planning Systems",
    image: "/images/system-erp.webp",
    imageAlt: "Illustrative enterprise software interface for inventory, invoices and business records",
    category: "Business operations",
    summary: "A connected system for managing customers, stock and billing without scattering the work across separate records.",
    workflow: ["Quote", "Invoice", "Track stock"],
    features: ["Client records, quotations and invoices", "Inventory and stock movements", "Service jobs and subscription management", "Accounting workflows"],
    fit: "Teams managing products, customer accounts and ongoing services.",
  },
  {
    slug: "hotel-management",
    title: "Hotel Management Systems",
    image: "/images/system-hotel.webp",
    imageAlt: "Illustrative hotel software interface for room reservations and guest accounts",
    category: "Hospitality management",
    summary: "A desktop hotel management system that connects front-desk bookings, guest accounts and restaurant operations.",
    workflow: ["Book", "Manage stay", "Close day"],
    features: ["Rooms and reservation management", "Guest folios and billing", "Restaurant orders and point of sale", "Night audit, reports and backups"],
    fit: "Hotels and lodges coordinating accommodation and on-site services.",
  },
  {
    slug: "school-management",
    title: "School Management Systems",
    image: "/images/system-school.webp",
    imageAlt: "Illustrative school software interface for admissions, fee payments and student records",
    category: "School administration",
    summary: "An administration platform that brings admissions, school fees and everyday records into a consistent workflow.",
    workflow: ["Admit", "Bill", "Record payment"],
    features: ["Admissions and student records", "Term billing and payment receipts", "Feeding records", "School reporting"],
    fit: "School teams handling student administration and fee collection.",
  },
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
    short: "Custom business software that connects your records, workflows and reporting — built around how your team operates.",
    points: ["Inventory, quotations & invoicing", "Hotel bookings, guest accounts & billing", "School administration & fee collection", "Dashboards, reporting & workflow automation"],
    pitch: "Less admin, more business.",
  },
  {
    slug: "photo",
    img: "service-photo-editor.jpg",
    title: "Photo Editing",
    short: "Product shots, portraits and promo visuals polished to a professional standard.",
    points: ["Product photography retouch", "Portraits & headshots", "Promo & social media visuals", "Batch editing for catalogs"],
    pitch: "Look as good as you are.",
  },
];
