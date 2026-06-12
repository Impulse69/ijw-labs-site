import { useState } from "react";

/** Renders /images/<file> if present; otherwise a labeled drop-slot frame. */
export default function ImageSlot({ file, alt, hint, className = "" }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className={`img-slot ${className}`}>
      {missing ? (
        <div className="placeholder" role="img" aria-label={`Image slot: ${alt}`}>
          <strong>IMAGE SLOT</strong>
          <code>public/images/{file}</code>
          {hint && <span style={{ fontSize: "0.78rem" }}>{hint}</span>}
        </div>
      ) : (
        <img src={`${import.meta.env.BASE_URL}images/${file}`} alt={alt} loading="lazy" onError={() => setMissing(true)} />
      )}
    </div>
  );
}
