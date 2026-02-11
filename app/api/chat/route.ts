import { streamText } from 'ai';
import { createAnthropic } from '@ai-sdk/anthropic'; // Or openai if you prefer

// Ensure you have ANTHROPIC_API_KEY in your .env.local file
// If you don't have it yet, we can use a mock response for tonight.

export async function POST(req: Request) {
  const { messages } = await req.json();

  // MOCK MODE: If you don't have keys yet, uncomment this block to test UI:
  /*
  return new Response("I received your message! Day 1 setup is complete.", {
     headers: { 'Content-Type': 'text/plain' } 
  });
  */

  // REAL MODE (Requires .env.local with API Key):
  const anthropic = createAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const result = streamText({
    model: anthropic('claude-3-5-sonnet-latest'),
    messages,
    system: "You are a UI generator assistant. For now, just acknowledge the user's request."
  });

  return result.toDataStreamResponse();
}