export function trackPageView() {
  if (typeof window === 'undefined') return
  try {
    // Fallback: simple console log; Vercel Analytics added in layout
    console.debug('[analytics] pageview', window.location.pathname)
  } catch {}
}


