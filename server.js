// Modern Lightweight Server for Prudent Financial Services, Inc. (Prufininc) - Vue.js Edition
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = fs.existsSync(path.join(__dirname, 'dist')) ? path.join(__dirname, 'dist') : __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];

  // API endpoint for Contact / Consultation submissions
  if (reqPath === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        message: 'Consultation request received by Prudent Financial Services, Inc.',
        refId: 'PRU-' + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toISOString()
      }));
    });
    return;
  }

  // Rewrite root to index.html
  if (reqPath === '/') {
    reqPath = '/index.html';
  }

  let filePath = path.join(PUBLIC_DIR, reqPath);

  // If file doesn't exist directly, check if it's an asset or SPA route
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    // Check if clean URL file exists
    if (fs.existsSync(filePath + '.html')) {
      filePath += '.html';
    } else {
      // SPA Fallback: serve index.html for Vue Router history mode
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head><title>404 - Page Not Found</title></head>
        <body style="font-family:sans-serif;text-align:center;padding:50px;">
          <h2>404 - Page Not Found</h2>
          <a href="/">Return to Homepage</a>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`Prudent Financial Services, Inc. (Prufininc) Vue 3 App`);
  console.log(`Serving on: http://localhost:${PORT}`);
  console.log(`Static root: ${PUBLIC_DIR}`);
  console.log(`Press Ctrl+C to terminate`);
  console.log(`=======================================================`);
});
