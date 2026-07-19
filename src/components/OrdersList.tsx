import Link from "next/link";
import { PackageOpen, ArrowUpRight } from "lucide-react";
import { Order } from "@/lib/dataInterface";
import OrderCard from "./OrderCard";

type Props = {
  orders: Order[];
};

const OrdersList = ({ orders }: Props) => {
  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center bg-white/40 border border-[#1A1A1A]/6 rounded-md">
        <PackageOpen className="w-10 h-10 text-[#1A1A1A]/20 mb-4" strokeWidth={1.5} />
        <p className="text-[#1A1A1A]/60 text-[16px] font-medium">
          No orders yet
        </p>
        <p className="text-[#1A1A1A]/40 text-[13.5px] mt-1 mb-6">
          Your past orders will show up here once you make a purchase.
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
    <div className="flex flex-col gap-5">
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
};

export default OrdersList;