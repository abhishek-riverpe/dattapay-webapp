import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Map of supported country codes to their regional page paths
const SUPPORTED_COUNTRIES: Record<string, string> = {
  NG: "/ng", // Nigeria
  BR: "/br", // Brazil
  AR: "/ar", // Argentina
};

// Cookie name to track if user has been geo-redirected
const GEO_COOKIE = "dattapay-geo-redirect";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only apply geo-routing to the homepage
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // Check if user has already been geo-redirected (avoid redirect loops)
  const hasGeoRedirected = request.cookies.get(GEO_COOKIE);
  if (hasGeoRedirected) {
    return NextResponse.next();
  }

  // Get country from various geo headers (Vercel, Cloudflare, etc.)
  // Note: x-vercel-ip-country is automatically set by Vercel Edge
  // cf-ipcountry is set by Cloudflare
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    null;

  // Check if we have a regional page for this country
  if (country && SUPPORTED_COUNTRIES[country]) {
    const regionalPath = SUPPORTED_COUNTRIES[country];
    const url = request.nextUrl.clone();
    url.pathname = regionalPath;

    // Create redirect response (302 temporary redirect for SEO)
    const response = NextResponse.redirect(url, 302);

    // Set cookie to prevent future redirects (user can navigate freely)
    // Cookie expires in 30 days
    response.cookies.set(GEO_COOKIE, "true", {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "lax",
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  // Only run middleware on homepage
  matcher: "/",
};
