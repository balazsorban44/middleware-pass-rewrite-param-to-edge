import { NextResponse } from "next/server"

export function middleware(req) {
  const url = req.nextUrl
  url.pathname = "/api/hello"
  url.searchParams.set("foo", "bar")
  return NextResponse.rewrite(url)
}
