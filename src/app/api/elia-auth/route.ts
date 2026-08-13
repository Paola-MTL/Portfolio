import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "elia_access";
const COOKIE_VALUE = "granted";

export async function POST(request: NextRequest) {
  const { password } = (await request.json()) as { password?: string };
  const correctPassword = process.env.ELIA_PASSWORD;

  if (!correctPassword || password !== correctPassword) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
