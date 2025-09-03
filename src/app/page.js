import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import Footer from "../components/Footer";
import { Import } from "lucide-react";
import { Services, About, Contact } from "../components/Sections";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
