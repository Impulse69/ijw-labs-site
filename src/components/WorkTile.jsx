import ImageSlot from "./ImageSlot";
import { IconArrow } from "./Icons";

/** A portfolio tile that links to the live project in a new tab. */
export default function WorkTile({ item }) {
  return (
    <a className="work-item" href={item.url} target="_blank" rel="noopener noreferrer"
       aria-label={`Open the live ${item.title} website in a new tab`}>
      <div className="work-thumb">
        <ImageSlot file={item.img} alt={`${item.title} — website built by IJW Labs`} />
        <span className="work-visit">Visit live site <IconArrow /></span>
      </div>
      <h4>{item.title}</h4>
      <span className="work-tag">{item.tag}</span>
    </a>
  );
}
