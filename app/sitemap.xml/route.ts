const routes = ['/', '/contact', '/privacy']

export function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes
    .map((r) => `<url><loc>${site}${r}</loc></url>`)
    .join('')}</urlset>`
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}


