import { type LucideIcon } from "lucide-react";

export function Glyph({ icon:Icon, size=22 }: {icon: LucideIcon; size?: number}) {
  return (
    <span className="glyph">
      <Icon size={size} strokeWidth={1.75}/>
    </span>
  );
}
