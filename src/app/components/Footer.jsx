import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-gray-100 w-full">
  <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
          <img src="/i&n.png" alt="logo" width={55} height={55} className='rounded-3xl'/>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
         Di ujung halaman ini, dan di setiap akhir cerita nanti, hatiku akan selalu memilihmu kembali.
        </p>
      </div>

      <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
        <li>
          <a className="text-gray-700 font-cinzel transition hover:text-gray-700/75" href="#"> IN'NAD </a>
        </li>

        <li>
          <a className="text-gray-700 font-cinzel transition hover:text-gray-700/75" href="#"> NAD'IN </a>
        </li>

        <li>
          <a className="text-gray-700 font-cinzel transition hover:text-gray-700/75" href="#"> NADIA </a>
        </li>

        <li>
          <a className="text-gray-700 font-cinzel transition hover:text-gray-700/75" href="#"> INDRA </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright © 2026. All rights reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer
