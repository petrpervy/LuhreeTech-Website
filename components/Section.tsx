import clsx from "clsx";

export default function Section({
  children,
  className,
  band = false,
  tint = "mint",
  compact = false,
  dots = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  band?: boolean;
  tint?: "mint"|"peach"|"default";
  compact?: boolean;
  dots?: boolean;
  id?: string;
}) {
  const bandClass =
    band ? (tint==="peach" ? "bg-band bg-band--peach" : tint==="mint" ? "bg-band bg-band--mint" : "bg-band") : "";
  return (
    <section id={id} className={clsx("section", compact && "section--compact", dots && "dots", bandClass, className)}>
      <div className="max-w-[1200px] md:max-w-[1280px] px-4 md:px-6 mx-auto">{children}</div>
    </section>
  );
}
