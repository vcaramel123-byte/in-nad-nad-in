"use client"

import React from "react"
import { Heart, Sparkles, Image as ImageIcon } from "lucide-react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pattern from "../components/Pattern"
import './style.css'

function page() {
  const kenanganPage = [
    {id:1, judul:'Kenangan 1', foto:'/kenangan/1.svg', style:'bg-yellow-500'},
    {id:2, judul:'Kenangan 2', foto:'/kenangan/2.svg', style:'bg-blue-500'},
    {id:3, judul:'Kenangan 3', foto:'/kenangan/3.svg', style:'bg-pink-500'},
    {id:4, judul:'Kenangan 4', foto:'/kenangan/4.svg', style:'bg-emerald-500'},
    {id:5, judul:'Kenangan 5', foto:'/kenangan/5.svg', style:'bg-orange-500'},
    {id:6, judul:'Kenangan 6', foto:'/kenangan/6.svg', style:'bg-purple-700'},
  ]

  const kenanganPage_2 = [
    {id:1, judul:'Kenangan 7', foto:'/kenangan_2/1.svg', style:'bg-purple-700'},
    {id:2, judul:'Kenangan 8', foto:'/kenangan_2/2.svg', style:'bg-pink-700'},
    {id:3, judul:'Kenangan 9', foto:'/kenangan_2/3.svg', style:'bg-red-700'},
  ]
  return (
    <div className="main flex flex-col justify-center items-center bg-yellow-500 ">
      <Navbar />
      <section className="relative mt-10 min-h-[80vh] w-full bg-[#4D96FF] flex flex-col items-center justify-center px-4 py-16 overflow-hidden border-b-4 border-black">
        <div className="absolute mt-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] left-7 w-20 h-20 flex justify-center items-center top-10 border-4 bg-gradient-to-l from-yellow-400 to-orange-200 bg-red-400 transform -rotate-15">
        <Sparkles width={80} height={80} className="transform bg-pink-500 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-20 border-4 p-3"/>
        </div>
      <div className="max-w-6xl p-8 leading-none">
        <div className="hero-text flex flex-col justify-center gap-5 mt-10 max-w-auto p-10 tracking-tight">
        <div className="p-3 font-bold flex justify-center text-white bg-yellow-400 transform rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl md:text-5xl bg-pink-500 border-4 border-black p-4 transform -rotate-7 flex gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Kenangan manis dan indah saat bersamamu
            <Heart width={80} height={80}/>
          </h2> 
        </div>  
          <p className="font-bold border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white flex gap-2 text-xl md:text-4xl transform -rotate-3 border-4 p-2 bg-emerald-800 mt-4">
           Disini tersimpan semua kenangan dan momen saat kita bersama <ImageIcon width={80} height={80} className="text-white"/>
          </p>  
        </div>
      </div>
       <div className="absolute shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] right-7 w-20 h-20 flex justify-center items-center bottom-5 border-4 bg-gradient-to-l from-yellow-400 to-orange-200 bg-red-400 transform -rotate-15">
        <Heart width={80} height={80} className="transform bg-pink-500 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-20 border-4 p-3"/>
        </div>
      </section>

     <div className="max-w-7xl z-10 mx-auto mt-3 py-16 px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
  {kenanganPage.map((isi) => (
    <div 
      key={isi.id} 
      className={`border-4 border-black p-5 w-full max-w-sm min-h-[420px] flex flex-col justify-between ${isi.style} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-200`}
    >
      <div className="space-y-4 flex-1 flex flex-col">
        {/* Judul Card */}
        <h3 className="text-xl md:text-2xl font-black text-center tracking-wide uppercase line-clamp-2">
          {isi.judul}
        </h3>
        
        {/* Wadah Foto/Gambar */}
        <div className="flex-1 flex items-center justify-center overflow-hidden rounded-sm aspect-video">
          <img 
            src={isi.foto} 
            alt={isi.judul} 
            className="w-full h-full object-cover target-image"
          />
        </div>
      </div>
    </div>
  ))}
</div>
<Pattern />
<div className="max-w-7xl mx-auto z-50 py-16 px-16 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
{kenanganPage_2.map((item)=>(
  <div key={item.id} className={`border-4 border-black p-5 w-full max-w-sm min-h-[520px] flex flex-col justify-between ${item.style} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] trasnition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-200`}>
    <h3 className="text-xl md:text-2xl font-black text-center tracking-wide upparcase line-clamp-2">
      {item.judul}
    </h3>
    <div className="flex-1 flex items-center justify-center overflow-hidden ronded-sm aspect-video">
      <img src={item.foto} alt="foto" 
      className="w-full object-cover target-image"
      />
    </div>
  </div>
))}
<div className="border-4 border-black p-5 w-full max-w-sm min-h-[520px] flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] trasnition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-200">
<video className="w-full object-cover target-image" src="/video/1.mp4" controls={true}></video>
</div>
</div>
    <Footer />
</div>
  )
}

export default page

