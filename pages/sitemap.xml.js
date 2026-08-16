export default function sitemap() {
  const baseUrl = 'https://www.netreachgo.com'
  const pages = ['', '/services', '/about', '/discovery', '/team', '/support', '/downloads']
  const now = new Date().toISOString()

  const urls = pages.map(page => {
    const url = `${baseUrl}${page}`
    const priority = page === '' ? '1.0' : page === '/discovery' ? '0.9' : '0.8'
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}
