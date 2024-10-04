import Image from "next/image";
// import Navbar from "@/components/Navbar";
import GetInTouch from "@/components/section/GetInTouch";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/section/Testimonials";
import Work from "@/components/section/Work";
import Skills from "@/components/section/Skills";
import Experience from "@/components/section/Experience";
import AboutMe from "@/components/section/AboutMe";
import Navbar from "@/components/layout/Navbar";
export default function Home() {
  return (
      <div>
        <Navbar />
        <AboutMe />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <GetInTouch />
        <Footer />
      </div>
  );
}
