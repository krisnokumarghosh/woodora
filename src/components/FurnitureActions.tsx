"use client";

import { Furniture } from "@/lib/dataInterface";
import { Minus, Plus, ShoppingCart, Thunderbolt } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useState } from "react";

const FurnitureActions = ({ furniture }: { furniture: Furniture }) => {
  const [qty, setQty] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isBuying, setIsBuying] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    // TODO: wire this up to your actual cart logic (context, API call, etc.)
    // e.g. await addToCart({ furnitureId: furniture._id, quantity: qty });
    await new Promise((r) => setTimeout(r, 600));
    setIsAdding(false);
  };

  const handleBuyNow = async () => {
    setIsBuying(true);
    // TODO: wire this up to your checkout flow
    // e.g. router.push(`/checkout?furnitureId=${furniture._id}&qty=${qty}`);
    await new Promise((r) => setTimeout(r, 600));
    setIsBuying(false);
  };

  return (
    <div>
      {/* Quantity stepper */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1A1A1A]/45">
          Quantity
        </span>
        <div className="flex items-center border border-[#1A1A1A]/15 rounded-full">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-9 h-9 flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-[14px] font-semibold text-[#1A1A1A]">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="w-9 h-9 flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex   gap-5">
        <Button
          type="button"
          onClick={handleAddToCart}
          isDisabled={isAdding}
          className="flex-1 bg-transparent md:h-14 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold text-[14.5px] flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-[#F5F0E6] transition-colors duration-300 disabled:opacity-60"
        >
          <ShoppingCart className="w-4 h-4" />
          {isAdding ? "Adding..." : "Add to Cart"}
        </Button>
        <Button
          type="button"
          onClick={handleBuyNow}
          isDisabled={isBuying}
          className="flex-1 md:h-14 rounded-full bg-[#A0522D] text-[#F5F0E6] font-semibold text-[14.5px] flex items-center justify-center gap-2 hover:bg-[#1A1A1A] transition-colors duration-300 disabled:opacity-60"
        >
          <Thunderbolt className="w-4 h-4" />
          {isBuying ? "Processing..." : "Buy Now"}
        </Button>
      </div>
    </div>
  );
};

export default FurnitureActions;