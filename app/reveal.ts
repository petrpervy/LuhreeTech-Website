export function mountReveals(){
  if (typeof window === 'undefined') return;
  const ok = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!ok) return;
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:.08, rootMargin:'80px'});
  els.forEach(el=>io.observe(el));
}
