export default function HeroDecor(){
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute -bottom-24 right-1/3 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl" />
    </div>
  );
}
