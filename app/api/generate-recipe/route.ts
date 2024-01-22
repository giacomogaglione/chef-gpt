import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

export const runtime = "edge"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { prompt } = await req.json()

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    temperature: 0.6,
    frequency_penalty: 0.2,
    presence_penalty: 0.3,
    max_tokens: 700,
    stream: true,
    n: 1,
    messages: [
      { role: "user", content: prompt },
      { role: "system", content: "You are an expert culinary chef" },
    ],
    response_format: { type: "json_object" },
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
