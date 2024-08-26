import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ParallaxFooter() {
  const [scrollY, setScrollY] = useState(0);
  const footerRef = useRef(null);

  const handleScroll = () => {
    const offsetY = window.scrollY;
    setScrollY(offsetY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <Navbar />
    <section className="bg-blue-500 text-white p-6">
      <p>Quelque chose</p>
      </section>
    <Footer />
    </>
  );
}
