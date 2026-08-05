import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // 1. Check if Vercel country header is present
  const vercelCountry = request.headers.get('x-vercel-ip-country');
  if (vercelCountry) {
    return NextResponse.json({ country: vercelCountry.toLowerCase() });
  }

  // 2. Get client IP from headers
  const xForwardedFor = request.headers.get('x-forwarded-for');
  const ip = xForwardedFor ? xForwardedFor.split(',')[0].trim() : '';

  // Prevent local loopback lookup (will fail or return local)
  if (!ip || ip === '::1' || ip === '127.0.0.1') {
    try {
      const res = await fetch('https://ipinfo.io/json');
      const data = await res.json();
      return NextResponse.json({ country: (data.country || 'in').toLowerCase() });
    } catch (e) {
      return NextResponse.json({ country: 'in' });
    }
  }

  try {
    const res = await fetch(`https://ipinfo.io/${ip}/json`);
    const data = await res.json();
    return NextResponse.json({ country: (data.country || 'in').toLowerCase() });
  } catch (err) {
    return NextResponse.json({ country: 'in' });
  }
}
