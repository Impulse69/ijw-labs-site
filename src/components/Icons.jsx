const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const IconCode = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...S} {...p}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
export const IconSystem = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...S} {...p}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
);
export const IconPhoto = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...S} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
);
export const IconDoc = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...S} {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
);
export const IconArrow = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...S} {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
export const IconCheck = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...S} {...p}><polyline points="20 6 9 17 4 12" /></svg>
);
export const IconPin = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...S} {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const IconClock = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...S} {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
export const IconWhatsApp = ({ size = 20, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4l-2.1-1c-.3-.1-.6-.1-.8.2l-1 1.2c-.2.2-.5.3-.8.2-1.1-.5-3.4-2.5-4-3.6-.1-.3-.1-.6.1-.8l1-1.2c.2-.3.2-.6.1-.9l-1-2.1c-.2-.5-.7-.7-1.2-.5C6.6 6.4 5.5 7.5 5.5 8.9c0 3.4 4.2 8.6 8.5 9.6 1.4.3 2.6-.6 3.4-1.7.3-.4.1-1-.4-1.2z" />
    <path d="M12 1C5.9 1 1 5.9 1 12c0 2 .5 3.9 1.5 5.6L1 23l5.6-1.5C8.2 22.5 10 23 12 23c6.1 0 11-4.9 11-11S18.1 1 12 1zm0 20c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.3.9.9-3.2-.2-.4C3 15.5 2.5 13.8 2.5 12 2.5 6.8 6.8 2.5 12 2.5S21.5 6.8 21.5 12 17.2 21 12 21z" />
  </svg>
);
export const IconInstagram = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...S} {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4.5" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" /></svg>
);
export const IconX = (p) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1.1 2h6.4l4.4 5.9L18.9 2zm-1.1 18.1h1.7L7 3.7H5.2l12.6 16.4z" /></svg>
);
export const IconSnapchat = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...S} {...p}><path d="M12 2c3 0 5 2.2 5 5v2.6c.8.2 1.6-.3 2.2-.1.5.2.4.8-.1 1.2-.5.4-1.6.7-1.8 1.4-.1.5 1.2 2.6 3.7 3.5.5.2.4.8-.2 1-.7.3-1.8.4-2 .8-.2.3-.1.8-.5 1-.5.2-1.4-.2-2.3 0-.8.2-1.6 1.6-4 1.6s-3.2-1.4-4-1.6c-.9-.2-1.8.2-2.3 0-.4-.2-.3-.7-.5-1-.2-.4-1.3-.5-2-.8-.6-.2-.7-.8-.2-1 2.5-.9 3.8-3 3.7-3.5-.2-.7-1.3-1-1.8-1.4-.5-.4-.6-1 .1-1.2.6-.2 1.4.3 2.2.1V7c0-2.8 2-5 5-5z" /></svg>
);
