#!/usr/bin/env node
/**
 * Satellite Delight — city/region landing-page generator (programmatic local SEO).
 * Emits flat <vertical>-<city-slug>.html pages (served at /<vertical>-<city-slug>) that reuse the
 * funnel engine and set window.SITE_CITY so the headline/intro/FAQ localize. Also writes
 * locations.html. Re-run after editing the arrays: node build-cities.mjs
 */
import { writeFileSync } from "fs";

const CITIES = [
  { metro: "Austin",      state: "TX", slug: "austin-tx" },
  { metro: "Dallas",      state: "TX", slug: "dallas-tx" },
  { metro: "Houston",     state: "TX", slug: "houston-tx" },
  { metro: "San Antonio", state: "TX", slug: "san-antonio-tx" },
  { metro: "Phoenix",     state: "AZ", slug: "phoenix-az" },
  { metro: "Denver",      state: "CO", slug: "denver-co" },
  { metro: "Tampa",       state: "FL", slug: "tampa-fl" },
  { metro: "Orlando",     state: "FL", slug: "orlando-fl" },
  { metro: "Atlanta",     state: "GA", slug: "atlanta-ga" },
  { metro: "Charlotte",   state: "NC", slug: "charlotte-nc" },
  { metro: "Nashville",   state: "TN", slug: "nashville-tn" },
  { metro: "Las Vegas",   state: "NV", slug: "las-vegas-nv" },
];

const VERTICALS = {
  internet:   { label: "Home Internet",     word: "internet" },
  "cable-tv": { label: "Cable & TV",        word: "TV" },
  bundle:     { label: "Internet/TV Bundles", word: "bundle" },
  mobile:     { label: "Mobile Plans",      word: "mobile plan" },
};

const HEAD = (title, desc, canon) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="https://satellitedelight.com/${canon}" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">`;

let pages = 0;
const byV = {};
for (const [vKey, v] of Object.entries(VERTICALS)) {
  byV[vKey] = [];
  for (const c of CITIES) {
    const slug = `${vKey}-${c.slug}`;
    const cityName = `${c.metro}, ${c.state}`;
    const title = `${v.label} in ${c.metro}, ${c.state} — Compare Providers | Satellite Delight`;
    const desc = `Compare ${v.word} providers, plans, and deals available in ${c.metro}, ${c.state}. See offers for your address — free, no obligation. Satellite Delight is an independent comparison service.`;
    const html = `${HEAD(title, desc, slug)}
<script>
window.SITE_PAGE="vertical";
window.SITE_VERTICAL="${vKey}";
window.SITE_CITY={name:"${cityName}",metro:"${c.metro}",state:"${c.state}"};
window.SITE_PHONE="";window.SITE_NONCONSENT_PHONE="";
</script>
<script defer src="/verticals.js"></script>
<script defer src="/funnel.js"></script>
</head>
<body><div id="app"></div></body>
</html>
`;
    writeFileSync(`${slug}.html`, html);
    byV[vKey].push({ slug, c });
    pages++;
  }
}

const groups = Object.entries(VERTICALS).map(([vKey, v]) => {
  const links = byV[vKey].map(({ slug, c }) => `<a href="/${slug}">${v.label} — ${c.metro}, ${c.state}</a>`).join("");
  return `<div class="loc-vert"><h3>${v.label}</h3><div class="loc-grid">${links}</div></div>`;
}).join("");

const locations = `${HEAD("Service Areas — Satellite Delight", "Compare internet, TV, and phone providers and deals across major U.S. metros. Find your city and service.", "locations")}
<script>window.SITE_PAGE="legal";window.SITE_PHONE="";window.SITE_NONCONSENT_PHONE="";</script>
<script defer src="/funnel.js"></script>
</head>
<body>
<main class="wrap" style="padding:46px 0 10px">
  <div class="seclabel">Service areas</div>
  <h1 class="sec-h" style="font-size:34px">Compare providers in your area</h1>
  <p class="lead" style="max-width:720px">Satellite Delight compares internet, TV, and phone offers available at your address across the country. Choose your service and city to get started — free and no obligation.</p>
  ${groups}
</main>
</body>
</html>
`;
writeFileSync("locations.html", locations);
console.log(`Generated ${pages} city pages across ${Object.keys(VERTICALS).length} verticals × ${CITIES.length} cities, plus locations.html`);
