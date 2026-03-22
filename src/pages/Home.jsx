import Topbar from "../components/TopBar";
import CustomNavbar from "../components/CustomNavbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import TopProducts from "../components/TopProducts";
import PromoSection from "../components/PromoSection";
import SpecialProducts from "../components/SpecialProducts";
import BrandSlider from "../components/Brands";
import BlogSection from "../components/BlogSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Topbar />
      <CustomNavbar />
      <Hero />
      <CategorySection />
      <TopProducts />
      <PromoSection />
      <SpecialProducts />
      <BrandSlider />
      <BlogSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Home;