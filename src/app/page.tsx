import Image from "next/image";
import Navbar from "@/components/Navbar";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
      <div>
        <Navbar />
        <Testimonials />
        <GetInTouch />
        <Footer />
      </div>
  );
}
