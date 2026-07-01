'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './gaya.css'

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if((username.toLowerCase() === 'indra' || username.toLowerCase() === 'nadia') && password === 'innad' || password === 'nadin') {
      router.push('/beranda');
    }else{
      setErrorMsg('Maaf anda salah tempat keknya!')
    }
  }
  return (
     <>
    <main className="relative w-full h-[100dvh] overflow-hidden bg-black flex justify-center items-center">
      
      <video
        src="/video/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        controls={false}
        className="absolute top-0 left-0 z-0 h-full w-full object-cover pointer-events-none" 
      />

      {!isOpen && (

<button
        onClick={() => setIsOpen(true)}
  className="relative cursor-pointer py-4 mt-90 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
>
  <span className="relative z-20">Klik di Sini!</span>

  <span
    className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
  ></span>

  <span
    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
  ></span>
  <span
    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
  ></span>
  <span
    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
  ></span>
  <span
    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
  ></span>
</button>

      )}

      {isOpen && (

        <div className="absolute inset-0 z-20 flex justify-center items-center bg-black/50 backdrop-blur-sm p-4">
          <form 
            onSubmit={handleSubmit} 
            className="relative z-30 flex flex-col gap-4  w-full max-w-sm h-auto shadow-md p-5 bg-white rounded-md bg-gradient-to-tr from-purple-200 to-cyan-200 overflow-hidden"
          >
            <div className="absolute -z-1 inset-0 opacity-20 bg-[radial-gradient(black_20%,transparent_20%)] bg-[size:10px_10px]"></div>
            <div className="absolute top-2 left-2 -z-1 w-15 h-15 rounded-full border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[conic-gradient(from_0deg,_#ff007f,_#7f00ff,_#00f0ff,_#ff007f)] animate-spin [animation-duration:10s]">
               {/*  */}
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl cursor-pointer"
            >
              ✕
            </button>
            
            <h2 className="text-center ms-10 font-bold text-2xl text-gray-800">Silahkan Login Dulu!</h2>
            <br />
            
            <div className="container-border border-4 p-5 me-2 md:ms-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="jalan border-b-8 border-dashed"></div>
            </div>

            <div>
              <label className="block text-lg font-bold mb-1 text-gray-700">Nama</label>
              <input 
                type="text" 
                className="w-full p-2 rounded border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black"
                placeholder="Masukan nama..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-lg font-bold mb-1 text-gray-700">Password</label>
              <input 
                type="password" 
                className="w-full p-2 rounded border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black"
                placeholder="Masukan Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full mt-2 p-2 bg-blue-600 hover:bg-blue-300 transition rounded font-bold text-2xl cursor-pointer border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Masuk
            </button>

            {errorMsg && (
              <p className="bg-red-500/20 border border-red-500 text-sm p-2 rounded text-center text-red-600">
                {errorMsg}
              </p>
            )}
            
          </form>
        </div>
      )}
    </main>
  </>
  );
}
