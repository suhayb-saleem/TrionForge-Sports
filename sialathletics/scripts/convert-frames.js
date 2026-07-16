const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'racket_animation');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png')).sort();

console.log(`Converting ${files.length} PNG frames to WebP and deleting original PNGs...`);

// Store original file sizes before they are deleted
const fileSizes = {};
files.forEach(f => {
  fileSizes[f] = fs.statSync(path.join(dir, f)).size;
});

const pngTotal = files.reduce((s, f) => s + fileSizes[f], 0);

Promise.all(
  files.map(f => {
    const pngPath = path.join(dir, f);
    const webpName = f.replace('.png', '.webp');
    const webpPath = path.join(dir, webpName);

    return sharp(pngPath)
      .webp({ quality: 82 })
      .toFile(webpPath)
      .then(info => {
        const origSize = fileSizes[f];
        const ratio = ((1 - info.size / origSize) * 100).toFixed(1);
        console.log(`  ${f} → ${webpName}  (${(origSize/1024).toFixed(0)}KB → ${(info.size/1024).toFixed(0)}KB, -${ratio}%)`);
        
        // Delete original PNG file
        fs.unlinkSync(pngPath);
      })
      .catch(err => {
        console.error(`Error converting ${f}:`, err);
        throw err;
      });
  })
).then(() => {
  const webpFiles = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));
  const webpTotal = webpFiles.reduce((s, f) => s + fs.statSync(path.join(dir, f)).size, 0);
  console.log(`\nTotal: ${(pngTotal/1024/1024).toFixed(1)}MB PNG → ${(webpTotal/1024/1024).toFixed(1)}MB WebP (-${((1-webpTotal/pngTotal)*100).toFixed(0)}%)`);
  console.log('Done!');
});
