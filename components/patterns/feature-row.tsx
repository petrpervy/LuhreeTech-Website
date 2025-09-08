import { cn } from "@/lib/cn";

interface FeatureRowProps {
  title: string;
  body: string;
  bullets: string[];
  imageSlot?: React.ReactNode;
  reverse?: boolean;
}

export function FeatureRow({ 
  title, 
  body, 
  bullets, 
  imageSlot, 
  reverse = false 
}: FeatureRowProps) {
  return (
    <section className="py-12 md:py-16">
      <div className={cn(
        "grid items-center gap-8 md:gap-12",
        reverse ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"
      )}>
        <div className={cn(
          "glass p-6 md:p-8 rounded-3xl",
          reverse && "order-2 md:order-1"
        )}>
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
          <p className="mt-3 text-base text-gray-500">{body}</p>
          <ul className="mt-5 grid gap-2">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-teal-500 flex-shrink-0"></span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn(
          "glass p-0 rounded-3xl aspect-[16/10] overflow-hidden hover-lift hover-glow",
          reverse && "order-1 md:order-2"
        )}>
          {imageSlot ?? (
            <div className="h-full w-full bg-gradient-to-br from-mist-periwinkle to-mist-peach" />
          )}
        </div>
      </div>
    </section>
  );
}
