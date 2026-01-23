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

  // Get country from various geo headers (Vercel, Cloudflare, etc.)
  // Note: x-vercel-ip-country is automatically set by Vercel Edge
  // cf-ipcountry is set by Cloudflare
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    null;

  // Handle homepage geo-redirect
  if (pathname === "/") {
    // Check if user has already been geo-redirected (avoid redirect loops)
    const hasGeoRedirected = request.cookies.get(GEO_COOKIE);

    if (!hasGeoRedirected && country && SUPPORTED_COUNTRIES[country]) {
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
  }

  // Create response with region header for all routes
  // This allows server components to read the detected region
  const response = NextResponse.next();
  if (country) {
    response.headers.set("x-detected-region", country);
  }

  return response;
}

export const config = {
  // Run middleware on all routes except static files and API routes
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logos|.*\\..*).*)"],
};
