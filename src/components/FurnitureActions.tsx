"use client";

import { addToCart } from "@/lib/actions/cart";
import { authClient } from "@/lib/auth-client";
import { notifyCartUpdated } from "@/lib/cart-events";
import { Furniture } from "@/lib/dataInterface";
import { errorToast, successToast } from "@/lib/toasts";
import { ShoppingCart } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FurnitureActions = ({ furniture }: { furniture: Furniture }) => {
  const [isAdding, setIsAdding] = useState(false);
  
  console.log(furniture);

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleAddToCart = async () => {
    if (!user) {
      return router.push(`/login?redirect=collections/${furniture._id}`);
    }
    setIsAdding(true);

    try {
      const data = {
        userId: user?.id,
        productId: furniture._id,
      };

      const result = await addToCart(data);
      if (result.insertedId) {
        successToast("Added to cart");
        notifyCartUpdated();
      }
    } catch (err) {
      if (err instanceof Error) {
        errorToast(err.message);
      } else {
        errorToast("Something went wrong");
      }
    } finally {
      setIsAdding(false);
    }
  };

 
  return (
    <div>
      {/* Buttons */}
      <div>
        <Button
          type="button"
          onClick={handleAddToCart}
          isDisabled={isAdding}
          className="w-full  hover:bg-transparent md:h-14 rounded-full border-2 hover:border-[#1A1A1A] hover:text-[#1A1A1A] font-semibold text-[14.5px] flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#F5F0E6] transition-colors duration-300 disabled:opacity-60"
        >
          <ShoppingCart className="w-4 h-4" />
          {isAdding ? "Adding..." : "Add to Cart"}
        </Button>
       
      </div>
    </div>
  );
};

export default FurnitureActions;
