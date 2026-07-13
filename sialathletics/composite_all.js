const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const baseDir = 'c:\\Users\\user\\Desktop\\TrionForge Sports LLC\\trionforge-sports';
const artifactDir = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\72336483-33b6-409e-952a-bd3861de54d7';

const logoPath = path.join(baseDir, 'public', 'images', 'logo_transparent_cropped.png');
const blankPaddlePath = path.join(artifactDir, 'blank_pickleball_paddle_1781874348960.png');
const blankPadelPath = path.join(artifactDir, 'blank_padel_racket_1781874361349.png');

const productsDir = path.join(baseDir, 'public', 'images', 'products');

// Helper to create text SVG overlay for pickleball paddles
function createPickleballTextSvg(seriesName, detailText, subText, thickness) {
  const brandRed = '#D71920';
  const greyText = '#9A9A9A';
  return Buffer.from(`
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <style>
        .series { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 800; font-size: 52px; fill: #FFFFFF; text-anchor: middle; text-transform: uppercase; letter-spacing: 2px; }
        .detail { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 20px; fill: ${brandRed}; text-anchor: middle; text-transform: uppercase; letter-spacing: 5px; }
        .sub { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; font-size: 14px; fill: ${greyText}; text-anchor: middle; text-transform: uppercase; letter-spacing: 1px; }
        .approved-box { fill: none; stroke: #FFFFFF; stroke-width: 1.5; }
        .approved-text { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 8px; fill: #FFFFFF; text-anchor: middle; text-transform: uppercase; letter-spacing: 1px; }
      </style>
      
      <!-- Series Title -->
      <text x="512" y="375" class="series">${seriesName}</text>
      
      <!-- Detail Title (e.g. CONTROL) -->
      <text x="512" y="415" class="detail">${detailText}</text>
      
      <!-- Technical Details -->
      <text x="512" y="455" class="sub">${subText}</text>
      <text x="512" y="480" class="sub">${thickness}</text>
      
      <!-- USA Pickleball Approved Stamp -->
      <rect x="442" y="520" width="140" height="35" class="approved-box" />
      <text x="512" y="534" class="approved-text">USA PICKLEBALL</text>
      <text x="512" y="546" class="approved-text">APPROVED</text>
    </svg>
  `);
}

// Helper to create text SVG overlay for padel rackets
function createPadelTextSvg(shapeName, coreMaterial) {
  const brandRed = '#D71920';
  const greyText = '#9A9A9A';
  return Buffer.from(`
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <style>
        .series { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 800; font-size: 46px; fill: #FFFFFF; text-anchor: middle; text-transform: uppercase; letter-spacing: 2px; }
        .shape { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 24px; fill: ${brandRed}; text-anchor: middle; text-transform: uppercase; letter-spacing: 4px; }
        .sub { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; font-size: 14px; fill: ${greyText}; text-anchor: middle; text-transform: uppercase; letter-spacing: 1px; }
      </style>
      
      <!-- Series Title -->
      <text x="512" y="360" class="series">FORGE SERIES</text>
      
      <!-- Shape (e.g. ROUND) -->
      <text x="512" y="405" class="shape">${shapeName}</text>
      
      <!-- Core material (e.g. EVA FOAM) -->
      <text x="512" y="445" class="sub">${coreMaterial}</text>
    </svg>
  `);
}

async function compositeAll() {
  console.log('Starting image compositing process...');

  // 1. Resize the logo for overlays
  // Pickleball logo: 220px wide
  const logoPB = await sharp(logoPath).resize(220).toBuffer();
  // Padel logo: 180px wide
  const logoPadel = await sharp(logoPath).resize(180).toBuffer();

  const jobs = [
    // --- PICKLEBALL PADDLES ---
    {
      base: blankPaddlePath,
      output: path.join(productsDir, 'tf-alpha-16mm.jpg'),
      composites: [
        { input: logoPB, left: 402, top: 235 },
        { input: createPickleballTextSvg('ALPHA', 'CONTROL', 'T700 RAW CARBON', '16MM CORE') }
      ]
    },
    {
      base: blankPaddlePath,
      output: path.join(productsDir, 'tf-pro-14mm.jpg'),
      composites: [
        { input: logoPB, left: 402, top: 235 },
        { input: createPickleballTextSvg('PRO SERIES', 'PERFORMANCE', 'FIBERGLASS FACE', '14MM CORE') }
      ]
    },
    {
      base: blankPaddlePath,
      output: path.join(productsDir, 'tf-strike-13mm.jpg'),
      composites: [
        { input: logoPB, left: 402, top: 235 },
        { input: createPickleballTextSvg('STRIKE', 'SPEED', 'CARBON COMPOSITE', '13MM CORE') }
      ]
    },
    // --- PADEL RACKETS ---
    {
      base: blankPadelPath,
      output: path.join(productsDir, 'tf-forge-padel-round-1.jpg'),
      composites: [
        { input: logoPadel, left: 422, top: 235 },
        { input: createPadelTextSvg('ROUND', 'EVA FOAM') }
      ]
    },
    {
      base: blankPadelPath,
      output: path.join(productsDir, 'tf-forge-padel-diamond-1.jpg'),
      composites: [
        { input: logoPadel, left: 422, top: 235 },
        { input: createPadelTextSvg('DIAMOND', 'HR3 RUBBER') }
      ]
    },
    {
      base: blankPadelPath,
      output: path.join(productsDir, 'tf-forge-padel-teardrop-1.jpg'),
      composites: [
        { input: logoPadel, left: 422, top: 235 },
        { input: createPadelTextSvg('TEARDROP', 'EVA FOAM') }
      ]
    }
  ];

  for (const job of jobs) {
    try {
      console.log(`Processing: ${path.basename(job.output)}...`);
      await sharp(job.base)
        .composite(job.composites)
        .jpeg({ quality: 90 })
        .toFile(job.output);
      console.log(`Saved successfully to ${job.output}`);
    } catch (e) {
      console.error(`Error processing ${path.basename(job.output)}:`, e.message);
    }
  }

  console.log('Compositing complete!');
}

compositeAll();
