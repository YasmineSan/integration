import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import BeerCard from './BeerCard';

const BeerCarousel = () => {
  const beers = [
    {
      beerName: 'Souvenir',
      breweryName: 'Floribière',
      imageUrl: '/img/453505478_122186157674024765_6170764990246105489_n.jpg',
      gradientColors: ['#FB0303', '#950202'],
    },
    {
      beerName: "L'autre",
      breweryName: 'Floribière',
      imageUrl: '/img/top-view-beer-frame-with-copy-space.jpg',
      gradientColors: ['#ffffff', '#000000'],
    },
    {
      beerName: "L’alternative",
      breweryName: 'Floribière',
      imageUrl: '/img/Idee1biere.png',
      gradientColors: ['#3D7C0C', '#BBBF03'],
    },
  ];

  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {beers.map((beer, index) => (
        <SwiperSlide key={index}>
          <BeerCard
            beerName={beer.beerName}
            breweryName={beer.breweryName}
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
