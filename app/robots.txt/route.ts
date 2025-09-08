export function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml`, {
    headers: { 'Content-Type': 'text/plain' },
  })
}


