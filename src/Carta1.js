import React from 'react'
import CartaModelo from './CartaModelo'

function Carta1() {
  return (
    <section className='grid'>
      <CartaModelo
      img="./japanese-house.jpg"
      stats1="4.7"
      stats2="(33)"
      place="MINECRAFT"
      description="Japanese House in Minecraft"
      price="From 5€"
      />
      <CartaModelo
      img="./escanor-vs-demon-king.jpg"
      stats1="4.9"
      stats2="(245)"
      place="e-Library"
      description="Read some Manga with us"
      price="From 3€"
      />
      <CartaModelo
      img="./photoshop.jpg"
      stats1="5.0"
      stats2="(2)"
      place="Photoshop Studio"
      description="Edit your photos with experts"
      price="From 14€"
      />
      <CartaModelo
      img="./model.jpg"
      stats1="5.0"
      stats2="(26)"
      place="Victoria's Secret"
      description="Learn to pose like a model"
      price="From 16€"
      />
    </section>
  )
}

export default Carta1