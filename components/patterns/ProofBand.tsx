export function ProofBand({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="mx-auto max-w-[1100px] py-6">
      <div className="rounded-3xl bg-white/70 backdrop-blur-md shadow-[0_12px_40px_rgba(2,8,23,0.08)] px-6 py-5 grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((k, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-brand-ink">{k.value}</div>
            <div className="text-sm text-gray-700">{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


