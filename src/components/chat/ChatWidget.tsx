"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SendHorizontal, MessageCircle, X, Loader2 } from "lucide-react";

type FurnitureResult = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1A1A1A] text-[#F5F0E6] flex items-center justify-center shadow-lg hover:bg-[#A0522D] transition-colors"
        aria-label="Open chat assistant"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className="
            fixed z-50 bg-[#F5F0E6] border border-[#1A1A1A]/10 shadow-2xl flex flex-col overflow-hidden
            inset-0 rounded-none
            sm:inset-auto sm:bottom-24 sm:right-6 sm:w-95 sm:h-135 sm:rounded-md
            sm:max-h-[calc(100dvh-7rem)]
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1A1A1A]/10 bg-[#1A1A1A] shrink-0">
            <div>
              <p className="text-[#F5F0E6] text-[14px] font-semibold">
                Woodora Assistant
              </p>
              <p className="text-[#F5F0E6]/50 text-[11.5px]">
                Ask me to find the perfect piece
              </p>
            </div>

            {/* Close button — visible on mobile fullscreen view */}
            <button
              onClick={() => setIsOpen(false)}
              className="sm:hidden text-[#F5F0E6]/70 hover:text-[#F5F0E6] transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
            {messages.length === 0 && (
              <p className="text-[13px] text-[#1A1A1A]/50 text-center mt-8">
                Try: &quot;Find me a cozy sofa under $500&quot;
              </p>
            )}

            {messages.map((m) => (
              <div key={m.id} className="flex flex-col gap-2">
                {m.parts.map((part, i) => {
                  // ── Text part ──
                  if (part.type === "text") {
                    return (
                      <div
                        key={i}
                        className={`max-w-[88%] sm:max-w-[85%] px-3.5 py-2.5 rounded-md text-[13.5px] leading-relaxed ${
                          m.role === "user"
                            ? "self-end bg-[#1A1A1A] text-[#F5F0E6]"
                            : "self-start bg-white/60 text-[#1A1A1A] border border-[#1A1A1A]/8"
                        }`}
                      >
                        {part.text}
                      </div>
                    );
                  }

                  // ── Tool result: searchFurniture ──
                  if (
                    part.type === "tool-searchFurniture" &&
                    part.state === "output-available"
                  ) {
                    const results = part.output as FurnitureResult[];

                    if (!Array.isArray(results) || results.length === 0) {
                      return null;
                    }

                    return (
                      <div
                        key={i}
                        className="self-start flex flex-col gap-2 w-full max-w-[95%] sm:max-w-[90%]"
                      >
                        {results.map((product) => (
                          <Link
                            key={product.id}
                            href={`/collections/${product.id}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 bg-white/70 border border-[#1A1A1A]/10 rounded-md p-2.5 hover:border-[#A0522D]/40 transition-colors"
                          >
                            <div className="relative w-14 h-14 shrink-0 rounded-sm overflow-hidden bg-[#DCD2C3]">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-semibold text-[#1A1A1A] truncate">
                                {product.name}
                              </p>
                              <p className="text-[12px] text-[#1A1A1A]/50">
                                {product.category}
                              </p>
                            </div>
                            <p className="text-[13px] font-bold text-[#A0522D] shrink-0">
                              ${product.price}
                            </p>
                          </Link>
                        ))}
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            ))}

            {isLoading && (
              <div className="self-start flex items-center gap-2 text-[#1A1A1A]/50 text-[12px] px-3.5">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 border-t border-[#1A1A1A]/10 shrink-0"
            style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about furniture..."
              className="flex-1 bg-white/60 border border-[#1A1A1A]/10 rounded-full px-4 py-2.5 text-[13px] outline-none focus:border-[#1A1A1A]/30"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-9 h-9 shrink-0 rounded-full bg-[#1A1A1A] text-[#F5F0E6] flex items-center justify-center hover:bg-[#A0522D] transition-colors disabled:opacity-50"
            >
              <SendHorizontal className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}