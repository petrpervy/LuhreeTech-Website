interface IntegrationsCloudProps {
  items: string[];
}

export default function IntegrationsCloud({ items }: IntegrationsCloudProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {items.map((name, i) => (
        <div 
          key={i} 
          className="glass p-3 rounded-2xl text-sm text-center hover-lift transition-transform motion-safe:duration-200"
        >
          {name}
        </div>
      ))}
    </div>
  );
}


