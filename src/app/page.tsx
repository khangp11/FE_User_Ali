import Logo from "@/components/header/Logo";
import Menu from "@/components/header/Menu";
import HeaderTop from "@/components/headerTop/headerTop";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { CarouselPlugin } from "@/components/carouse/CarouselPlugin";
import { CarouseCustomer } from "@/components/carouse/CarouseCustomer";
import Product from "@/components/product/product";
import TechnologyNews from "@/components/TechnologyNews/TechnologyNews";
import { CarouseLogoPartners } from "@/components/carouse/CarouseLogoPartners";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <HeaderTop />
      <Menu />
      <Breadcrumb />
      <CarouselPlugin />
      <Product />
      <CarouseCustomer />
      <TechnologyNews />
      {/* <CarouseLogoPartners /> */}
      <Footer />
    </>
  );
}
