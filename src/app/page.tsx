"use client";

import HeroSliderSection from "@/components/sections/shared/HeroSliderSection";
import CategorySection from "@/sections/shared/CategorySection";

export default function Home() {
  return (
    <main>
      {/* Category Section */}
      <CategorySection />
      {/* Hero Banner Section */}
      <HeroSliderSection />
    </main>
  );
}
