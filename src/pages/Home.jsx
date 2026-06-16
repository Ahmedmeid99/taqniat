import Layout from "../layout/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ContactSection from "../components/ContactSection/ContactSection";
const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
