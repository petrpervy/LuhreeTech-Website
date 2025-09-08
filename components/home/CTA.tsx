export default function CTA(){
  return (
    <section className="scene scene-lavender py-16 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-extrabold">Start scaling without adding headcount.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-ink/70">Join teams already saving time and money with AI automation.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a className="btn btn-cta" href="/contact">Book a Demo</a>
          <a className="btn btn-ghost" href="/roi">Calculate Your ROI</a>
        </div>
      </div>
    </section>
  );
}
