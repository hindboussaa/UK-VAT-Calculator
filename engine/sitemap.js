const fs = require("fs");

const baseUrl = "https://yoursite.com";

const pages = fs.readdirSync("build/pages");

const urls = pages.map(p => `
<url>
<loc>${baseUrl}/pages/${p}</loc>
</url>
`);

const sitemap = `<?xml version="1.0"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

fs.writeFileSync("build/sitemap.xml", sitemap);

console.log("Sitemap generated");