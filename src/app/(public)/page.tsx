import Banner from "@/components/homepage/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "A modern blogging platform to write and share your stories.",
};
export default function Home() {
  return (
   <div>
    <Banner/>
   </div>
  );
}
