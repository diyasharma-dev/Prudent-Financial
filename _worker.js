/**
 * Cloudflare Worker for Prudent Financial Services, Inc. (Prufininc)
 * High-performance edge delivery, clean URL routing, security headers & consultation API
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle Contact / Consultation Form API endpoint
    if (path === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json();
        
        // Log in worker execution logs
        console.log('Received consultation inquiry for Prufininc:', body);

        return new Response(JSON.stringify({
          success: true,
          message: 'Thank you for reaching out to Prudent Financial Services, Inc. A senior accountant will review your details and contact you shortly.',
          timestamp: new Date().toISOString()
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid request body'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Rewrite clean URLs to .html files if needed
    // e.g. /about -> /about.html, /services -> /services.html
    const cleanPages = ['about', 'services', 'industries', 'how-it-works', 'pricing', 'contact'];
    const trimmedPath = path.replace(/^\/|\/$/g, '');

    if (cleanPages.includes(trimmedPath)) {
      url.pathname = `/${trimmedPath}.html`;
      return env.ASSETS ? env.ASSETS.fetch(new Request(url.toString(), request)) : fetch(new Request(url.toString(), request));
    }

    // Default static asset fetching via Cloudflare Pages or Workers Static Assets
    let response;
    if (env.ASSETS) {
      response = await env.ASSETS.fetch(request);
    } else {
      response = await fetch(request);
    }

    // Append modern security headers
    const newHeaders = new Headers(response.headers);
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
};
