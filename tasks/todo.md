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
