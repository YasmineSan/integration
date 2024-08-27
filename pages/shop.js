import React from 'react'
import Navbar from '../components/Navbar'
import BeerHighlight from '../components/BeerHighlight'

export default function Shop() {
  return (
    <div className='py-4'>
        <Navbar />
        <img src='\img\top-view-beer-frame-with-copy-space.jpg' />
        <h1 className='font-kameron text-xl-4 sm:text-xs'>Shop</h1>
        <div className="space-y-8"> {/* Ajout de `space-y-8` pour espacer les cartes verticalement */}
          <BeerHighlight
            beerName="Souvenir"
            imageUrl="\img\453505478_122186157674024765_6170764990246105489_n.jpg"
            gradientColors={['#FB0303', '#950202']}
          />
          <BeerHighlight
            beerName="L'autre"
            imageUrl="\img\top-view-beer-frame-with-copy-space.jpg"
            gradientColors={['#ffffff', '#000000']}
          />
          <BeerHighlight
            beerName="L'alternative"
            imageUrl="\img\Idée 1biere.png"
            gradientColors={['#3D7C0C', '#BBBF03']}
          />
        </div>
    </div>
  )
}
