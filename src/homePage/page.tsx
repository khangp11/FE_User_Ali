'user client';
import React from 'react'
import Logo from "@/components/header/Logo";
import Menu from "@/components/header/Menu";
import HeaderTop from "@/components/headerTop/headerTop";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { CarouselPlugin } from "@/components/carouse/CarouselPlugin";
import { CarouseCustomer } from "@/components/carouse/CarouseCustomer";
import Product from "@/components/product/Product";
import TechnologyNews from "@/components/TechnologyNews/TechnologyNews";
import { CarouseLogoPartners } from "@/components/carouse/CarouseLogoPartners";
import Footer from "@/components/footer/Footer";
import BackgroundSection from "@/components/background/BackgroundSection";

const page = () => {
    return (
        <>
            <HeaderTop />
            <Menu />
            <CarouselPlugin />
            <Product />
            <BackgroundSection image="https://ali.vn//assets/img/bg1.jpg" className="custom-class"></BackgroundSection>
            <CarouseCustomer />
            <BackgroundSection image="https://ali.vn//assets/img/cta1.jpg" backgroundPosition="bottom" className="container mx-auto px-4"></BackgroundSection>
            <TechnologyNews />
            <CarouseLogoPartners />
            <Footer />
        </>
    )
}

export default page