import { fetcher } from "@/lib/fetcher"

export async function GET(request: Request) {
  const res = await fetcher('https://jsonplaceholder.typicode.com/posts/');
  const data = res.json()

  return new Response(data)
}
