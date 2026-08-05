import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Simple pass-through middleware to satisfy compiler while resolving deployment conflicts
  return NextResponse.next();
}
