import CartClient from "@/components/CartClient";
import { getCartByUserId } from "@/lib/api/cart";
import { getFurnitureById } from "@/lib/api/furnitures";
import { getUserSession } from "@/lib/core/session";
import { CartItemWithFurniture } from "@/lib/dataInterface";

const CartPage = async () => {
  const user = await getUserSession();
  const cart = await getCartByUserId(user?.id as string);

  const cartItems: CartItemWithFurniture[] = await Promise.all(
    (cart || []).map(async (item) => {
      const furniture = await getFurnitureById(item.productId);
      return { ...item, quantity: 1, furniture };
    })
  );

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <div className="max-w-275 mx-auto px-6 py-14">
        <p className="text-[#A0522D] text-[11px] font-bold tracking-[0.28em] uppercase mb-3">
          Shopping Cart
        </p>
        <h1 className="text-[#1A1A1A] font-black text-[32px] md:text-[40px] tracking-tight mb-10">
          Your Cart
        </h1>

        <CartClient initialItems={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;