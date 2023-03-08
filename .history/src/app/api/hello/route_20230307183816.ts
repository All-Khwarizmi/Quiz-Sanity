import { fetcher } from "@/lib/fetcher"

export async function GET(request: Request) {
  const res = await fetcher('http://localhost:1337/api/memos');

  return new Response('Hello, Next.js!')
}
