export default function IntegrationsRow({ items }: { items: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {items.map((n, i) => (
        <span
          key={i}
          className="rounded-full px-3 py-1 text-sm bg-white/80 backdrop-blur-md shadow-[0_8px_24px_rgba(2,8,23,0.06)] hover:-translate-y-0.5 motion-safe:transition-transform"
        >
          {n}
        </span>
      ))}
    </div>
  );
}
