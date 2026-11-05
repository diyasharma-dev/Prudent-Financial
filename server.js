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
      // 404 handler with site navigation links
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>404 - Page Not Found | Prudent Financial Services, Inc.</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-slate-50 text-slate-800 min-h-screen flex items-center justify-center p-6 font-sans">
          <div class="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center space-y-5">
            <div class="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl mx-auto">
              404
            </div>
            <h2 class="text-2xl font-bold text-slate-900">Page Not Found</h2>
            <p class="text-sm text-slate-600">The requested page does not exist or has moved. Explore our core sections:</p>
            <div class="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a href="/index.html" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Home</a>
              <a href="/about.html" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">About Us</a>
              <a href="/outsourcing.html" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Outsourcing</a>
              <a href="/services.html" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Services</a>
              <a href="/consulting.html" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Consulting</a>
              <a href="/pricing.html" class="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">Pricing</a>
            </div>
            <a href="/index.html" class="inline-block w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow transition-all">
              Return to Homepage →
            </a>
          </div>
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
