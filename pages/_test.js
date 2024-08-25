import { useEffect, useRef, useState } from "react";

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
    <footer
      ref={footerRef}
      className="relative h-screen flex flex-col justify-end items-center overflow-hidden"
      style={{ backgroundColor: "#f8b400" }} // Couleur de la bière
    >
      <div
        className="absolute bottom-0 left-0 w-full h-full transition-transform duration-300"
        style={{
          transform: `translateY(${Math.min(scrollY, 100)}px)`,
          backgroundColor: "#f8b400", // Couleur de la bière, synchronisée avec le fond
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-full"></div>
      <div class="bubble-container">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
            <div class="bubble"></div>
        </div>

      <div className="relative z-10 text-center p-4">
        <h2 className="text-2xl font-bold text-white">Merci de nous avoir visités !</h2>
        <p className="text-white">Profitez bien de notre site et de nos produits.</p>
      </div>
    </footer>
  );
}
