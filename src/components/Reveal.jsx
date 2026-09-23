/** Preserve layout wrappers without delaying content visibility. */
export default function Reveal({ children, className, style }) {
  return <div className={className} style={style}>{children}</div>;
}
