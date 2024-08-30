import Image from "next/image";
import React from "react";

const Footer = () => (
  <footer className="bg-gray-200 text-center p-8 font-kameron">
    <div className="flex justify-around items-center mb-6">
      <a href="/news" className="text-lg font-bold">
        NEWS
      </a>
      <a href="/shop" className="text-lg font-bold">
        SHOP
      </a>
      <a href="/contact" className="text-lg font-bold">
        CONTACT
      </a>
      <a href="/partenaires" className="text-lg font-bold">
        PARTENAIRES
      </a>
    </div>
    <div className="flex justify-center mb-4 gap-2">
      <a href="https://facebook.com">
        <Image src="/img/facebook.svg" alt="Facebook" width={32} height={32} />
      </a>
      <a href="https://instagram.com">
        <Image
          src="/img/instagram-icon.svg"
          alt="Instagram"
          width={32}
          height={32}
        />
      </a>
    </div>
    <p className="text-sm mb-2 font-kameron">
      L'abus d'alcool nuit à la santé. -
    </p>
    <p className="text-sm mb-4 font-kameron">
      © 2024 Floribière. Tous droits réservés.
    </p>
    <div className="flex justify-center grid-cols-3 gap-2">
      <a href="/mentions-legales" className="text-xs">
        Mentions légales
      </a>

      <a href="/conditions-generales-de-vente" className="text-xs">
        Conditions générales de vente
      </a>

      <a href="/politique-de-confidentialite" className="text-xs">
        Politique de confidentialité
      </a>
    </div>
  </footer>
);

export default Footer;
