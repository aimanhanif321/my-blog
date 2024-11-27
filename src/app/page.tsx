import Image from "next/image";
import Hero from "@/Components/Hero/page";
import About from "@/Components/About/page";
import Symptoms from "@/Components/Symptoms/page";
import Prevention from "@/Components/Prevention/page";
import Epidemiology from "@/Components/Epidemiology/page";
import Articals from "@/Components/Articals/page";
import Footer from "@/Components/Footer/page";

export default function Home() {
  return (
   <div>
      
    <Hero/>
    <About/>
    <Symptoms/>
    <Prevention/>
    <Epidemiology/>
    <Articals/>
    <Footer/>
   </div>
  );
}
