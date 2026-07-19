import Image from "next/image";
import Link from "next/link";
import { Package, Calendar } from "lucide-react";
import { Order } from "@/lib/dataInterface";

type Props = {
  order: Order;
};

const OrderCard = ({ order }: Props) => {
  const itemCount = order.items.reduce((sum, i) => sum + i.quantity, 0);

  const formattedDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white/50 border border-[#1A1A1A]/8 rounded-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#1A1A1A]/8">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#1A1A1A]/5 flex items-center justify-center">
            <Package
              className="w-3.5 h-3.5 text-[#1A1A1A]/60"
              strokeWidth={1.75}
            />
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1A1A1A]/40">
              Order
            </p>
            <p className="text-[12.5px] font-mono text-[#1A1A1A]/70">
              #{order._id.slice(-8).toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="px-5 sm:px-6 py-4 flex flex-col gap-4">
        {order.items.map((item) => (
          <div key={item.furnitureId} className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0 rounded-sm overflow-hidden bg-[#DCD2C3]">
                <Link href={`/collections/${item.furnitureId}`}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="64px"
                className="object-cover"
              />
                </Link>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-[#1A1A1A] truncate">
                {item.name}
              </p>
              <p className="text-[12.5px] text-[#1A1A1A]/45 mt-0.5">
                Qty {item.quantity} × ${item.price}
              </p>
            </div>
            <p className="text-[14px] font-bold text-[#1A1A1A] shrink-0">
              ${item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-[#1A1A1A]/2 border-t border-dashed border-[#1A1A1A]/12">
        <div className="flex items-center gap-1.5 text-[12.5px] text-[#1A1A1A]/50">
          <Calendar className="w-3.5 h-3.5" strokeWidth={1.75} />
          <span>{formattedDate}</span>
          <span className="text-[#1A1A1A]/25">•</span>
          <span>
            {itemCount} item{itemCount > 1 ? "s" : ""}
          </span>
        </div>

        <div className="text-right">
          <p className="text-[10.5px] uppercase tracking-wide text-[#1A1A1A]/40">
            Total
          </p>
          <p className="text-[18px] font-black text-[#A0522D]">
            ${order.subtotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
