// Lightweight zero-dependency development server for local preview
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

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

  // API endpoint simulation
  if (reqPath === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Message received by Prudent Financial Services local server.' }));
    });
    return;
  }

  // Rewrite root to index.html
  if (reqPath === '/') {
    reqPath = '/index.html';
  }

  // Handle clean URLs (e.g., /about -> /about.html)
  let filePath = path.join(__dirname, reqPath);
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath += '.html';
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 handler
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head><title>404 Not Found - Prudent Financial</title><style>body{font-family:sans-serif;text-align:center;padding:50px;color:#333;}</style></head>
        <body>
          <h2>404 - Page Not Found</h2>
          <p>The requested file does not exist.</p>
          <a href="/">Back to Homepage</a>
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
  console.log(`Prudent Financial Services, Inc. (Prufininc) Web Server`);
  console.log(`Serving on: http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to terminate`);
  console.log(`=======================================================`);
});
