import type { NextConfig } from "next";

const securityHeaders = [
  // Verhindert, dass die Seite in iFrames eingebettet wird (Clickjacking)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Verhindert MIME-Type-Sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Referrer-Informationen minimieren
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Browser-Features einschränken
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // HSTS – erzwingt HTTPS
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://app.cal.eu",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://app.cal.eu",
      "frame-src https://app.cal.eu",
      "worker-src 'self' blob:",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
