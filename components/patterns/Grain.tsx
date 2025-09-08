export default function Grain(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[.06] mix-blend-overlay"
      style={{ backgroundImage:"url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')", }} />
  );
}
