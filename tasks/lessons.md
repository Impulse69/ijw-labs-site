# Lessons

- When a visitor can choose among contact channels, make the main sitewide call to action open the Contact page. Keep channel-specific links on that page instead of repeating them throughout the site.
- For a Netlify form, verify that form detection is enabled and test a real submission through to the destination inbox before claiming email delivery.
- For founder search visibility, create a distinct crawlable page for each person and verify sitemap inclusion, canonical metadata, and structured data. Describe indexing as pending until Search Console confirms it.
- Keep public contact identity separate from internal notification recipients. Check rendered HTML, metadata, machine-readable files, and built assets for private addresses after an email change.
- For a request to remove decorative effects, inspect CSS and component motion together; removing shadows alone leaves page fades, lifts, and scroll reveals. Keep functional loading feedback and visible keyboard focus.
- For founder and About copy, use a restrained corporate voice and only source-backed biographical claims. Ask for an exact profile URL when a social search cannot establish a confident identity match.
- Profile actions should have visible button boundaries, padding and interaction states, especially on mobile cards. When a founder provides an exact public profile URL, update their display name and identity metadata from that page while leaving gated career details unclaimed.
- A browser-tab SVG favicon does not establish Google Search favicon eligibility. Use a supported raster favicon in the homepage link, serve real image files at root favicon URLs, and verify their MIME types and crawl access before expecting the search result icon to change.
- Check prerendered raw HTML for exactly one route-specific description; replacing a template title with new metadata before removing the template description can delete the new description by accident. Indexed search snippets can still look correct from body text, so inspect the delivered head directly.
