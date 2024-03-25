import FlashSell from "@/components/HomePagge/flashSell/FlashSell";
import HeroSection from "@/components/HomePagge/heroSection/HeroSection";
import MostPopular from "@/components/HomePagge/mostPopular/MostPopular";
import TopCategory from "@/components/HomePagge/topCategory/TopCategory";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FlashSell />
      <TopCategory />
      <MostPopular />
    </>
  );
};

export default Homepage;
