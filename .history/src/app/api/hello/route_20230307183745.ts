import { fetcher } from "@/lib/fetcher"

export async function GET(request: Request) {
  const res = await fetcher()

  return new Response('Hello, Next.js!')
}
