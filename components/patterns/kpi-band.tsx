interface KpiItem {
  value: string;
  label: string;
}

interface KpiBandProps {
  items: KpiItem[];
}

export default function KpiBand({ items }: KpiBandProps) {
  return (
    <div className="glass p-5 md:p-6 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((kpi, i) => (
        <div key={i} className="text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-accent-teal-500">
            {kpi.value}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {kpi.label}
          </div>
        </div>
      ))}
    </div>
  );
}
