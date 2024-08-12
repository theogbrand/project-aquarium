// import { Configuration, OpenAIApi } from "openai-edge";
// import { StreamingTextResponse } from "ai";
// import { MendableStream } from "@/lib/mendable_stream";
import { systemMessage } from "@/lib/strings";
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

// export const runtime = "edge";
export const maxDuration = 30;

export async function POST(req: Request) {
  // Allow streaming responses up to 30 seconds

  const { messages } = await req.json();

  try {
    console.log("Sending request to openai");
    const result = await streamText({
      // model: openai("gpt-4o-2024-08-06"),
      model: anthropic('claude-3-5-sonnet-20240620'),
      messages,
      system: systemMessage,
    });
    console.log("recevied request to openai");
    return result.toDataStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response("Error in route.ts sending request to openai", { status: 500 });

  }
}

// export const dynamic = "force-static";
