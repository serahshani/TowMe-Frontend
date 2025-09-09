// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if a session or token exists (assuming you're using cookies)
  const isAuthenticated = request.cookies.has('user-session');

  // If the user tries to access the protected page and is NOT authenticated
  // if (pathname.startsWith('/request-tow') && !isAuthenticated) {
  //   const loginUrl = new URL('/auth/login', request.url);
  //   loginUrl.searchParams.set('redirectedFrom', pathname);
  //   return NextResponse.redirect(loginUrl);
  //

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  // matcher: ['/request-tow'], // This ensures middleware only runs on this specific route
};
