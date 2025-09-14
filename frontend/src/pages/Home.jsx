import React from 'react'
import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Promotion from '../components/home/Promotion'

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Promotion />
    </div>
  )
}

export default Home
