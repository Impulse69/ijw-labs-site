import { useState } from "react";

const WIDTHS = [480, 960, 1400];

/** Renders /images/<file> responsively (WebP srcset + JPG fallback);
 *  shows a labeled drop-slot frame when the file is missing.
 *  `eager` marks above-the-fold images (hero): no lazy-load + high fetch priority. */
export default function ImageSlot({ file, alt, hint, className = "", eager = false }) {
  const [missing, setMissing] = useState(false);
  const base = `${import.meta.env.BASE_URL}images/`;
  const stem = file.replace(/\.[^.]+$/, "");
  const webpSrcset = WIDTHS.map((w) => `${base}${stem}-w${w}.webp ${w}w`).join(", ");

  return (
    <div className={`img-slot ${className}`}>
      {missing ? (
        <div className="placeholder" role="img" aria-label={`Image slot: ${alt}`}>
          <strong>IMAGE SLOT</strong>
          <code>public/images/{file}</code>
          {hint && <span style={{ fontSize: "0.78rem" }}>{hint}</span>}
        </div>
      ) : (
        <picture>
          <source
            type="image/webp"
            srcSet={webpSrcset}
            sizes="(max-width: 680px) 92vw, (max-width: 960px) 46vw, 560px"
          />
          <img
            src={`${base}${file}`}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            decoding="async"
            onError={() => setMissing(true)}
          />
        </picture>
      )}
    </div>
  );
}
