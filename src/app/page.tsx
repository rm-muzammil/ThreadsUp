import BrandSection from "@/components/sections/BrandSection";
import CategorySection from "@/components/sections/CategorySection";
import HeroSection from "@/components/sections/HeroSection";
import MainSection from "@/components/sections/MainSection";
import ReviewSection from "@/components/sections/ReviewSection";

export default function Home() {
  return (
    <div>
      {/* >>>>>>> feature/ui */}
      <HeroSection />
      <BrandSection />
      <MainSection />
      <CategorySection />
      <ReviewSection />
      <CategorySection />

      {/* >>>>>>> feature/ui */}
    </div>
  );
}
