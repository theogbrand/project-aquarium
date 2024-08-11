// import { Configuration, OpenAIApi } from "openai-edge";
// import { StreamingTextResponse } from "ai";
// import { MendableStream } from "@/lib/mendable_stream";
import { welcomeMessage } from "@/lib/strings";
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// export const runtime = "edge";
export const maxDuration = 30;

export async function POST(req: Request) {
  // Allow streaming responses up to 30 seconds

  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-2024-08-06"),
    messages,
  });

  return result.toDataStreamResponse();
}
