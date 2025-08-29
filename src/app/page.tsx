import Navbar from "@/components/Navbar";
import BrandSection from "@/components/sections/BrandSection";
import HeroSection from "@/components/sections/HeroSection";
import Topbar from "@/components/Topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <HeroSection />
      <BrandSection />
    </div>
  );
}
