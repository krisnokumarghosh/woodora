"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  ArrowUpRight,
  Minus,
  Plus,
  Trash2,
  Loader2,
} from "lucide-react";
import { notifyCartUpdated } from "@/lib/cart-events";
import { CartItemWithFurniture } from "@/lib/dataInterface";
import { createOrder, deleteCartById } from "@/lib/actions/cart";
import { errorToast, successToast } from "@/lib/toasts";
import { authClient } from "@/lib/auth-client";

type Props = {
  initialItems: CartItemWithFurniture[];
};

const CartClient = ({ initialItems }: Props) => {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.furniture.price * item.quantity,
        0,
      ),
    [items],
  );

  const handleIncrement = (cartId: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i._id === cartId ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  };

  const handleDecrement = (cartId: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i._id === cartId && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i,
      ),
    );
  };

  const handleRemove = async (cartId: string) => {
    setRemovingId(cartId);
    try {
      const result = await deleteCartById(cartId);
      if (result.deletedCount > 0) {
        setItems((prev) => prev.filter((i) => i._id !== cartId));
        notifyCartUpdated();
        successToast("Removed from cart");
      } else {
        errorToast("Item not found in cart");
      }
    } catch (err) {
      if (err instanceof Error) {
        errorToast(err.message);
      } else {
        errorToast("Something went wrong");
      }
    } finally {
      setRemovingId(null);
    }
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const orderPayload = {
        userId: user?.id as string,
        items: items.map((item) => ({
          furnitureId: item.furniture._id,
          name: item.furniture.name,
          price: item.furniture.price,
          quantity: item.quantity,
          image: item.furniture.image,
        })),
        subtotal,
      };
      const result = await createOrder(orderPayload);
      if (result.insertedId) {
        successToast("Order Placed");
        router.push("/payment-success");
      }
    } catch (err) {
      if (err instanceof Error) {
        errorToast(err.message);
      } else {
        errorToast("Something went wrong");
      }
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center bg-white/40 border border-[#1A1A1A]/6 rounded-md">
        <ShoppingBag
          className="w-10 h-10 text-[#1A1A1A]/20 mb-4"
          strokeWidth={1.5}
        />
        <p className="text-[#1A1A1A]/60 text-[16px] font-medium">
          Your cart is empty
        </p>
        <p className="text-[#1A1A1A]/40 text-[13.5px] mt-1 mb-6">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#1A1A1A] text-[#F5F0E6] text-[13.5px] font-semibold hover:bg-[#A0522D] transition-colors"
        >
          Browse Collection
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      {/* Cart items */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        {items.map((item) => {
          const { furniture, quantity } = item;
          const lineTotal = furniture.price * quantity;
          const isRemoving = removingId === item._id;

          return (
            <div
              key={item._id}
              className="flex gap-4 sm:gap-5 bg-white/40 border border-[#1A1A1A]/6 rounded-md p-4 sm:p-5"
            >
              {/* Image */}
              <Link
                href={`/furnitures/${furniture._id}`}
                className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-md overflow-hidden bg-[#DCD2C3]"
              >
                <Image
                  src={furniture.image}
                  alt={furniture.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </Link>

              {/* Info */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <Link href={`/furnitures/${furniture._id}`}>
                      <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug truncate hover:text-[#A0522D] transition-colors">
                        {furniture.name}
                      </h3>
                    </Link>
                    <p className="text-[12px] text-[#1A1A1A]/45 mt-0.5">
                      {furniture.category}
                    </p>
                    <p className="text-[13.5px] font-bold text-[#A0522D] mt-1.5">
                      ${furniture.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemove(item._id)}
                    disabled={isRemoving}
                    className="text-[#1A1A1A]/30 hover:text-[#A0522D] transition-colors disabled:opacity-40 shrink-0"
                    aria-label="Remove item"
                  >
                    {isRemoving ? (
                      <Loader2 className="w-4 h-4 animate-spin text-[#A0522D]" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Quantity stepper + line total */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-[#1A1A1A]/15 rounded-full">
                    <button
                      type="button"
                      onClick={() => handleDecrement(item._id)}
                      disabled={isRemoving || quantity <= 1}
                      className="w-8 h-8 flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors disabled:opacity-30"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-7 text-center text-[13.5px] font-semibold text-[#1A1A1A]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrement(item._id)}
                      disabled={isRemoving}
                      className="w-8 h-8 flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors disabled:opacity-30"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[14.5px] font-bold text-[#1A1A1A]">
                    ${lineTotal}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order summary */}
      <div className="lg:sticky lg:top-24 bg-white/50 border border-[#1A1A1A]/8 rounded-md p-6">
        <h2 className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#1A1A1A]/50 mb-5">
          Order Summary
        </h2>

        <div className="flex items-center justify-between text-[14px] text-[#1A1A1A]/60 mb-2.5">
          <span>
            Subtotal ({items.reduce((n, i) => n + i.quantity, 0)} items)
          </span>
          <span className="font-semibold text-[#1A1A1A]">${subtotal}</span>
        </div>
        <div className="flex items-center justify-between text-[14px] text-[#1A1A1A]/60 mb-5">
          <span>Shipping</span>
          <span className="font-semibold text-[#8A9678]">Free</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#1A1A1A]/10 mb-6">
          <span className="text-[15px] font-bold text-[#1A1A1A]">Total</span>
          <span className="text-[22px] font-black text-[#A0522D]">
            ${subtotal}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className="w-full h-13 rounded-full bg-[#1A1A1A] text-[#F5F0E6] font-semibold text-[14.5px] flex items-center justify-center gap-2 hover:bg-[#A0522D] transition-colors duration-300 disabled:opacity-60"
        >
          {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
};

export default CartClient;
