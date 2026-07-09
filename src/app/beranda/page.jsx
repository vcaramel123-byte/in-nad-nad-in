"use client"; // <--- TAMBAHKAN BARIS INI DI PALING ATAS

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

function Page() {
  useEffect(() => {
    const tlHero = gsap.timeline({ defaults: { ease: 'power4.out' } });
    
    tlHero.from('.relative', {
      y: 200,
      opacity: 0,
      duration: 1.2,
      delay: 0.5
    });
    
   tlHero.to('.relative', {
      y: 0,
      opacity: 1,
      delay: 0.5
   })
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-gradient-to-l from-emerald-300 to-pink-400 text-slate-800">
      <Navbar />
      <main className="flex-grow hero-title">
        <Hero />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default Page;