import { OpenAIStream, OpenAIStreamPayload } from "@/lib/openai"

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI")
}

export const runtime = "edge"

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as {
    prompt?: string
  }

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 })
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.4,
    top_p: 0.9,
    frequency_penalty: 0.2,
    presence_penalty: 0.3,
    max_tokens: 700,
    stream: true,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
