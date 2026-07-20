// lib/ai/tools.ts
import { tool } from "ai";
import { z } from "zod";

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL;

// ── Search Furniture Tool ──
const searchFurnitureSchema = z.object({
  query: z.string().optional().describe("Keyword to search product name"),
  category: z
    .string()
    .optional()
    .describe("e.g. Living Room, Bedroom, Dining Room, Office Room, Kitchen"),
  maxPrice: z.number().optional().describe("Maximum price filter"),
  minPrice: z.number().optional().describe("Minimum price filter"),
});

export const searchFurnitureTool = tool({
  description:
    "Search furniture products by category, price range, or keyword. Use this whenever the user asks to find, browse, or recommend furniture.",
  inputSchema: searchFurnitureSchema,
  execute: async ({ query, category, maxPrice, minPrice }) => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (category) params.set("category", category);
    if (minPrice) params.set("minPrice", String(minPrice));
    if (maxPrice) params.set("maxPrice", String(maxPrice));

    const res = await fetch(
      `${API_BASE}/api/ai/search-furniture?${params.toString()}`
    );

    if (!res.ok) return { error: "Failed to search furniture" };
    return await res.json();
  },
});

// ── Summarize Product Tool ──
const summarizeProductSchema = z.object({
  productId: z.string().describe("The furniture product ID"),
});

export const summarizeProductTool = tool({
  description:
    "Get full details of a specific furniture product by ID to summarize its features for the user.",
  inputSchema: summarizeProductSchema,
  execute: async ({ productId }) => {
    const res = await fetch(`${API_BASE}/api/ai/product/${productId}`);
    if (!res.ok) return { error: "Failed to fetch product" };
    return await res.json();
  },
});