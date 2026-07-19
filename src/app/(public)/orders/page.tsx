import OrdersList from "@/components/OrdersList";
import { getOrderByUserId } from "@/lib/api/cart";
import { getUserSession } from "@/lib/core/session";

const OrderPage = async () => {
  const user = await getUserSession();
  const orders = await getOrderByUserId(user?.id as string);

  return (
    <div className="min-h-dvh bg-[#F5F0E6] px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <div className="max-w-225 mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#A0522D] mb-1.5">
            Your Account
          </p>
          <h1 className="font-heading font-extrabold text-[#1A1A1A] text-[26px] md:text-[32px] tracking-[-0.02em]">
            Order History
          </h1>
        </div>

        <OrdersList orders={orders} />
      </div>
    </div>
  );
};

export default OrderPage;