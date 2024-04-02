import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "./utils/verify-token";

export async function middleware(request: NextRequest) {
  const token = cookies().get("token")?.value;

  const authenticated = await verifyToken(token);

  if (!authenticated && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/account/login", request.url));
  }
  if (authenticated && request.nextUrl.pathname.startsWith("/account")) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/profile/:path*"],
};
