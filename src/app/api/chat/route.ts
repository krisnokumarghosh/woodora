import { groq } from "@ai-sdk/groq";
import {
  streamText,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
  UIMessage,
} from "ai";
import { searchFurnitureTool, summarizeProductTool } from "@/lib/ai/tools";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  try {
    const result = streamText({
      model: groq("openai/gpt-oss-120b"),
      system: `You are Woodora's friendly furniture shopping assistant. 
      Help users find furniture that matches their needs (style, room, budget).
      When users describe what they want, use the searchFurniture tool to find real products from our catalog.
      When a user asks about a specific product, use summarizeProduct to give them key details in a warm, helpful tone.
      Keep responses concise, friendly, and focused on helping them find the perfect piece.
      Always mention actual product names and prices from search results — never make up products.`,
      messages: await convertToModelMessages(messages),
      tools: {
        searchFurniture: searchFurnitureTool,
        summarizeProduct: summarizeProductTool,
      },
      stopWhen: ({ steps }) => steps.length >= 5,
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}