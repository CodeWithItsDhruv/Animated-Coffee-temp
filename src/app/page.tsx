import CoffeeCanvas from "@/components/CoffeeCanvas";
import OverlaySections from "@/components/OverlaySections";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyUs from "@/components/home/WhyUs";
import BestSellers from "@/components/home/BestSellers";
import StoryTeaser from "@/components/home/StoryTeaser";
import Process from "@/components/home/Process";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero Experience */}
      <CoffeeCanvas />
      <OverlaySections />

      <div className="fixed bottom-8 w-full flex justify-center text-white/20 text-[10px] tracking-[0.3em] animate-pulse pointer-events-none z-50 mix-blend-difference">
        SCROLL TO EXPLORE
      </div>

      {/* Static Content - Appears after the 500vh scroll (or when user scrolls past canvas) */}
      <div className="relative z-20 bg-background">
        <WhyUs />
        <BestSellers />
        <StoryTeaser />
        <Process />
        <CTABanner />
      </div>

      <Footer />
    </main>
  );
}
