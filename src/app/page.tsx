import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BrandSection from "@/components/sections/BrandSection";
import CategorySection from "@/components/sections/CategorySection";
import HeroSection from "@/components/sections/HeroSection";
import MainSection from "@/components/sections/MainSection";
import ReviewSection from "@/components/sections/ReviewSection";
import Topbar from "@/components/Topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandSection />
      <MainSection />
      <CategorySection />
      <ReviewSection />
      <CategorySection />
    </div>
  );
}
