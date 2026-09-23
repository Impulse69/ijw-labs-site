# IJW Labs domain launch

- [x] Audit hosting, DNS, current build, and public content.
- [x] Correct canonical URLs, crawl files, page metadata, and static rendering.
- [x] Build and check all public routes and assets.
- [x] Deploy the prepared site and connect `ijwlabs.com` and `www.ijwlabs.com`.
- [x] Verify HTTPS, redirects, indexing files, and visible content live.

## Review

- Production: Netlify deploy `6ab3ed38391bfc5a475686e1`, built from commit `072e3d3` in a clean worktree.
- All five canonical paths return HTTP 200 with matching canonical tags, unique titles, descriptions, visible HTML, and expected structured data. HTTP and `www` redirect to HTTPS apex. `robots.txt`, `sitemap.xml`, `llms.txt`, hero image, and the Retell web-call function respond successfully.
- Google Search Console domain ownership verified with Cloudflare TXT. All five pages were queued for indexing; the homepage passed Google's live URL test. Sitemap submission succeeded, but Search Console still reported `Couldn't fetch` on September 23, 2026; the live sitemap responds HTTP 200 and parses as XML. Recheck Google's processing after its next crawl. No page is confirmed indexed yet.
- IndexNow accepted all five canonical URLs (HTTP 200 on final submission). The former GitHub Pages routes now direct browsers to the new domain and declare its canonical URLs.
- Unrelated local `VoiceWidget.jsx` edits and the untracked Retell webhook were excluded from the published build.
- Cloudflare registration is active through September 23, 2027, with auto renewal already enabled. Custom domain email has no MX provider configured.

## Founder profiles and contact update

- [x] Publish separate, linked, prerendered profiles for Isaac Asamoah, Judah B. Amanor, and Wisdom Dzanado.
- [x] Generate the eight-page sitemap from route metadata and queue all founder pages for Google indexing.
- [x] Route general calls to action through Contact and deliver contact form notifications to juniorike69@gmail.com.
- [x] Verify the live deployment, structured data, sitemap, and an actual contact form email.

### Review

See `tasks/founder-contact-update.md` for the verification details. Google's sitemap report remains `Couldn't fetch` on September 23, 2026; the live file is valid and a daily monitor is active.

## Public email and private delivery

- [x] Replace the public email address in site content and metadata with ijwlabs2026@gmail.com.
- [x] Add ijwlabs2026@gmail.com to Netlify form notifications while retaining private delivery to the owner.
- [x] Deploy clean source and verify the published address and notification settings.

### Review

- Source commit `efaade2` was published as Netlify deploy `6ab429274267a55bf3f2facb` from a clean worktree.
- The homepage, Contact page, and `llms.txt` respond HTTP 200 and show the IJW email without the private address. No built asset contains the private address.
- Netlify form detection remains enabled. The project inquiry form has two enabled submission email hooks, one for each inbox. Delivery to the new IJW inbox was not directly observed because that inbox was not opened in this task.
- Unrelated local VoiceWidget and Retell webhook changes were excluded from the deploy.

## Remove decorative effects and add favicon

- [x] Remove glow shadows, lift/zoom hover motion, scroll reveal motion, and the blurred navigation treatment.
- [x] Add a branded favicon file and link it from the HTML head.
- [x] Build, inspect the output, deploy from clean source, and verify live assets and styles.

### Review

- Published commit `94f9674` from a clean worktree as Netlify deploy `6ab42fe96b97118346a226f8`.
- Build prerendered all nine routes and generated the eight-page public sitemap. Decorative motion and shadow patterns are absent from source. The voice connection spinner remains to indicate loading.
- Live homepage, favicon SVG, and stylesheet all returned HTTP 200. The homepage links `/favicon.svg`; the stylesheet contains no box-shadow or backdrop-blur declarations. The live homepage was visually reviewed.
- Unrelated local VoiceWidget and Retell webhook changes were excluded from the build.

## Refresh concept gallery screenshots

- [x] Check the published demos from Yaven Heights onward and capture their current landing pages.
- [x] Replace gallery JPEGs and responsive WebP variants for those concepts; remove Rene's Hotel from the exhibition data.
- [x] Build, review image and link integrity, publish from clean source, and verify the live gallery.

### Review

- Captured and reviewed 14 live concept landing pages from Yaven Heights through Stopping Point. Each source returned HTTP 200 with a visible heading. Replaced each JPEG and its 480/960/1400 WebP variants.
- Removed Rene's Hotel from the gallery and deleted its image assets. FilifaF's demo returned HTTP 404, so its card and assets were temporarily removed after the user chose that option.
- Gallery now has 17 cards, each with a complete image set. Removed fixed portfolio counts from the search description and `llms.txt` to avoid future drift.
- Final production deploy `6ab4390cd4ea3a62725bcb99` was built from clean commit `9b952fb`. The live work page shows 17 cards and neither removed exhibit; sampled refreshed images return as images with HTTP 200. Removed asset paths fall through to the site's SPA HTML rather than serving old image files.
- Unrelated local VoiceWidget and Retell webhook changes were excluded from the published build.

## Founder profile buttons and Judah identity

- [x] Style founder profile links as clear buttons with accessible hover and focus states.
- [x] Use Judah's verified LinkedIn name and URL across visible copy, metadata and structured data.
- [x] Build clean source, deploy, and verify live founder cards and profile links.

### Review

- LinkedIn's public page identifies Judah Amanor Tetteh in Accra and lists Takoradi Technical University; further experience is gated, so no additional career claims were added.
- Production deploy `6ab44ab44bc7bf9bf7f5a8b8` built from clean commit `2a433c1`. The live About page has outlined profile buttons; Judah's card opens his live profile, which links to the supplied LinkedIn URL. HTML includes the name and `sameAs` URL, with no old name or private email.
- Unrelated VoiceWidget and Retell webhook changes were excluded from the deployed build.

## Corporate About page and founder profiles

- [x] Verify Isaac's portfolio; keep Judah's LinkedIn details out until his exact profile is confirmed.
- [x] Replace Wisdom's portrait with the supplied photo and responsive variants.
- [x] Rewrite About and individual founder profiles in a corporate voice, keeping metadata and structured data consistent.
- [x] Build from clean source, deploy, and verify live pages and portrait assets.

### Review

- Isaac's portfolio supports the technical profile and is linked from his page and structured data. Public search and LinkedIn sign-in did not establish a confident Judah profile match; his existing confirmed name and role remain.
- Production deploy `6ab43fd53a633988a1449e4f` was built from clean commit `2cb1632`. About and all three founder routes return HTTP 200, the sitemap returns XML, and Wisdom's live 960px WebP exactly matches the build asset by SHA-256.
- Local visual review confirmed the corporate layout and updated portraits. Unrelated VoiceWidget and Retell webhook changes were excluded from the published build.

## Curate gallery and add Nonna Lodge

- [x] Remove Oak Guest House, Translinks, Stopping Point, Akosombo Continental, and Dear Home from gallery data and published image assets.
- [x] Capture the live Nonna Lodge landing page and add responsive gallery images.
- [x] Distinguish the live Nonna Lodge project from concept demos in cards and page copy.
- [x] Build, deploy clean source, and verify the live work page and images.

### Review

- Nonna Lodge returned HTTP 200 and displayed a complete hotel homepage. Captured its current landing page as a JPEG and 480/960/1400 WebP variants.
- The portfolio now has 13 cards. Nonna Lodge is first and featured on Home and About, with a live website label; the other cards remain marked as concepts. Removed the five requested cards and their 20 image files.
- Production deploy `6ab43c59a00bc2c88df7aafe` was built from clean commit `936788a`. The live work page shows 13 entries, lists Nonna first, and contains none of the retired names. Home and About show Nonna. Its WebP image returns HTTP 200 with image/webp content type.
- Unrelated local VoiceWidget and Retell webhook changes were excluded from the published build.
