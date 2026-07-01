import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'
function page() {
  return (
    <div className="max-w-full h-screen bg-gradient-to-l from-emerald-300 to-pink-400">
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </div>
  )
}

export default page
