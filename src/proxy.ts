import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ["/wallet", "/profile"];
const authRoutes = ["/login", "/register"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const allCookies = request.cookies.getAll();
  console.log(`[PROXY] ${pathname} — Cookies (${allCookies.length}):`, allCookies.map(c => `${c.name}=${c.value.substring(0, 30)}...`));

  let token = null;
  try {
    token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
    });
  } catch (err) {
    console.error(`[PROXY] ${pathname} — getToken error:`, err);
  }

  const isLoggedIn = !!token;
  console.log(`[PROXY] ${pathname} — token:`, token ? "EXISTS" : "NULL", `| logged in: ${isLoggedIn}`);

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isLoggedIn) {
      console.log(`[PROXY] ${pathname} — REDIRECTING to /login (not authenticated)`);
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (isLoggedIn) {
      console.log(`[PROXY] ${pathname} — REDIRECTING to /profile/dashboard (authenticated)`);
      return NextResponse.redirect(new URL("/profile/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg$).*)",
  ],
};
