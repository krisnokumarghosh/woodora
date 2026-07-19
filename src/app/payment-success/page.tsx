import Link from "next/link";
import { CheckCircle2, ShoppingBag, Receipt, ArrowRight } from "lucide-react";

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#F5F0E6] px-6 py-16">
      <div className="w-full max-w-120">
        
        {/* Success Card */}
        <div className="bg-white/50 border border-[#1A1A1A]/8 rounded-md p-8 md:p-10 text-center">
          
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8A9678]/20 rounded-full blur-xl scale-150" />
              <div className="relative w-16 h-16 rounded-full bg-[#8A9678]/15 flex items-center justify-center">
                <CheckCircle2
                  className="w-9 h-9 text-[#8A9678]"
                  strokeWidth={1.75}
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#A0522D] mb-2">
            Order Confirmed
          </p>
          <h1 className="font-heading font-extrabold text-[#1A1A1A] text-[26px] md:text-[30px] tracking-[-0.02em] leading-tight mb-3">
            Payment Successful
          </h1>
          <p className="text-[14px] text-[#1A1A1A]/60 leading-relaxed max-w-85 mx-auto mb-8">
            Thank you for your purchase. Your order has been placed and is
            being prepared. A confirmation email is on its way.
          </p>

          {/* Divider */}
          <div className="border-t border-dashed border-[#1A1A1A]/15 my-6" />

          {/* Order meta (optional info row) */}
          <div className="flex items-center justify-center gap-2 text-[13px] text-[#1A1A1A]/50 mb-8">
            <Receipt className="w-4 h-4" strokeWidth={1.75} />
            <span>A receipt has been sent to your email</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-3">
            <Link
              href="/orders"
              className="md:flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] text-[13.5px] font-semibold hover:bg-[#1A1A1A]/5 transition-colors"
            >
              View Order
            </Link>
            <Link
              href="/collections"
              className="md:flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#1A1A1A] text-[#F5F0E6] text-[13.5px] font-semibold hover:bg-[#A0522D] transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.75} />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Bottom link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
          >
            Back to Home
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PaymentSuccessPage;