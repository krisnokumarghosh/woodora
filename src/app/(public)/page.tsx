import Banner from "@/components/homepage/Banner";
import RecommendedProducts from "@/components/homepage/RecommendedProducts";
import ShopByRoom from "@/components/homepage/ShopByRoom";
import TimelessElegance from "@/components/homepage/TimelessElegance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "A modern blogging platform to write and share your stories.",
};
export default function Home() {
  return (
   <div>
    <Banner/>
    <TimelessElegance/>
    <ShopByRoom/>
    <RecommendedProducts/>
   </div>
  );
}
