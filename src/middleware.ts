import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "elia_access";
const COOKIE_VALUE = "granted";
const PROTECTED_PATH = "/projects/elia";
const UNLOCK_PATH = "/elia-unlock";

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  if (request.cookies.get(COOKIE_NAME)?.value === COOKIE_VALUE) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = UNLOCK_PATH;
  url.searchParams.set("from", PROTECTED_PATH);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/projects/elia"],
};
