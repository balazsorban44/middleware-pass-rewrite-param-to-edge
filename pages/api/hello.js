export default function handler(req) {
  console.log(req.nextUrl.searchParams.get("foo"))
}

export const config = { runtime: "experimental-edge" }
