import ImageSlot from "./ImageSlot";
import { IconArrow } from "./Icons";

/** A concept tile that links to its published demo in a new tab. */
export default function WorkTile({ item }) {
  const isProject = item.kind === "project";
  return (
    <a className="work-item" href={item.url} target="_blank" rel="noopener noreferrer"
       aria-label={`Open the ${item.title} ${isProject ? "live website" : "website concept"} in a new tab`}>
      <div className="work-thumb">
        <ImageSlot file={item.img} alt={`${item.title} ${isProject ? "website" : "website concept"} by IJW Labs`} />
        <span className="work-visit">{isProject ? "View live website" : "View live demo"} <IconArrow /></span>
      </div>
      <h4>{item.title}</h4>
      <span className="work-tag">{item.tag}</span>
    </a>
  );
}
