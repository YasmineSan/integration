import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import BeerCard from "./BeerCard";

const BeerCarousel = () => {
  const beers = [
    {
      beerName: "Souvenir",
      breweryName: "Floribière",
      imageUrl: "/img/453505478_122186157674024765_6170764990246105489_n.jpg",
      gradientColors: ["#FB0303", "#950202"],
    },
    {
      beerName: "L'autre",
      breweryName: "Floribière",
      imageUrl: "/img/top-view-beer-frame-with-copy-space.jpg",
      gradientColors: ["#ffffff", "#000000"],
    },
    {
      beerName: "L’alternative",
      breweryName: "Floribière",
      imageUrl: "/img/Idee1biere.png",
      gradientColors: ["#3D7C0C", "#BBBF03"],
    },
    {
      beerName: "La petite soeur",
      breweryName: "Floribière",
      imageUrl:
        "https://www.brasserievalduc.be/wp-content/uploads/2022/09/compo_verre-bouteille_la-petite-soeur_1024px.png",
      gradientColors: ["#FF7F50", "#FF4500"], // Orange to Red
    },
    {
      beerName: "Spot bière",
      breweryName: "Floribière",
      imageUrl:
        "https://www.btobeer.com/images/catalogues/thumbnails/340x340/bouteille-biere-verre-8024681-biere-75cl-verallia.jpg",
      gradientColors: ["#87CEEB", "#4682B4"], // Light Blue to Steel Blue
    },
    {
      beerName: "Bière violette",
      breweryName: "Floribière",
      imageUrl:
        "https://cdn.auchan.fr/media/A0220190322000103986PRIMARY_2048x2048/B2CD/?format=rw&quality=75&width=1200&height=1200",
      gradientColors: ["#8A2BE2", "#4B0082"], // Blue Violet to Indigo
    },
  ];

  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={5}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true} // Effet infini
      modules={[Autoplay, Navigation, Pagination]}
    >
      {beers.map((beer, index) => (
        <SwiperSlide key={index}>
          <BeerCard
            beerName={beer.beerName}
            breweryName={beer.breweryName}
            imageHeight="h-64"
            imageUrl={beer.imageUrl}
            gradientColors={beer.gradientColors}
            WidthCard="w-full" //Largeur de la carte
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BeerCarousel;
