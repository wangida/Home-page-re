import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";
import DigitalBusiness from "@/components/sections/DigitalBusiness";
import Industries from "@/components/sections/Industries";
import NewsAndContact from "@/components/sections/NewsAndContact";
import Solutions from "@/components/sections/Solutions";
import Trust from "@/components/sections/Trust";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <DigitalBusiness />
        <Solutions />
        <Industries />
        <Trust />
        <NewsAndContact />
      </main>
      <Footer />
    </>
  );
}
