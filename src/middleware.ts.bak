import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Common malicious bots and spam scrapers to block
const BANNED_BOTS = [
  'petalbot', 'sogou', 'rohit', 'bytespider', 'mj12bot', 
  'semrushbot', 'ahrefsbot', 'dotbot', 'rogerbot', 'claudebot',
  'screaming frog', 'exabot', 'ltx71', 'spbot', 'backlinkcrawler'
];

// Legitimate bots we want to allow (Search Engines & AI APIs)
const ALLOWED_BOTS = [
  'googlebot', 'google-extended', 'gptbot', 'chatgpt-user', 
  'bingbot', 'yandex', 'duckduckgo', 'slurp', 'applebot', 
  'facebookexternalhit', 'twitterbot', 'linkedinbot'
];

export function middleware(request: NextRequest) {
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // 1. Check if user-agent contains blacklisted spam bots
  const isBanned = BANNED_BOTS.some(bot => userAgent.includes(bot));
  if (isBanned) {
    return new NextResponse('Access Denied: Request blocked by security policy.', { status: 403 });
  }

  // 2. Identify generic bots/crawlers/spiders
  const isGenericBot = userAgent.includes('bot') || 
                        userAgent.includes('crawler') || 
                        userAgent.includes('spider') || 
                        userAgent.includes('scrape');

  // 3. Block generic bots unless they are explicitly in our whitelist
  if (isGenericBot) {
    const isAllowed = ALLOWED_BOTS.some(bot => userAgent.includes(bot));
    if (!isAllowed) {
      return new NextResponse('Access Denied: Unrecognized bot/crawler blocked.', { status: 403 });
    }
  }

  return NextResponse.next();
}

// Apply middleware to all routes except API, static assets, public assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
