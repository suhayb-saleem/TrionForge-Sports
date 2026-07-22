// Notifies IndexNow (Bing, Yandex, and other participating search engines)
// that our pages exist/changed, so they get crawled without waiting for a
// routine re-crawl. Run after any content deploy: `node scripts/indexnow-submit.mjs`
const HOST = 'www.sialathletics.com';
const KEY = '2696eee2e47449c6b67f7a7530971fe5';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  '/',
  '/catalogue',
  '/manufacturing',
  '/about',
  '/faq',
  '/contact',
  '/terms',
  '/privacy',
].map((path) => `https://${HOST}${path}`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`IndexNow response: ${res.status} ${res.statusText}`);
const text = await res.text();
if (text) console.log(text);

if (!res.ok) process.exit(1);
