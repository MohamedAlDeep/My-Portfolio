import Image from "next/image";
import { Navbar } from "./components/Design/Navbar";
import { Footer } from "./components/Design/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Footer/>     
    </div>
  );
}
