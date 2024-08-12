import Image from "next/image";
import Navbar from "@/components/Navbar";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
export default function Home() {
  return (
      <div>
        <Navbar />
        <GetInTouch />
        <Footer />
      </div>
  );
}
