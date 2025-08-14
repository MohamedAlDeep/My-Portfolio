import Image from "next/image";
import { Navbar } from "./components/Design/Navbar";
import { Footer } from "./components/Design/Footer";
import { HeroSection } from "./components/Design/heroSection";
import { About } from "./components/Design/about";
import { Blog } from "./components/Design/blog";
import { Projects } from "./components/Design/projects";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Blog />
      <Footer/>     
    </div>
  );
}
