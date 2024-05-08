"use client"
import Link from 'next/link'
import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { useEffect, useState } from 'react';


const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })


const Headers = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = currentScrollPos > prevScrollPos;

      setNavbarVisible(!isScrolledDown || currentScrollPos < 10); // Navbar'ın gizlenip gösterilme koşulları

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <>
      <nav className={` transition-all duration-300 ${isNavbarVisible ? 'opacity-100' : 'opacity-0'} fixed top-0 left-0 w-full bg-white z-10`}>

        <div className='fixed z-10 w-full'>
          <main className={plusJakarta.className}>
            <div className='w-full flex justify-center items-center text-base gap-5 md:gap-[71px] py-8 bg-[#222] text-white'>
              <Link href="/"><p className='hover:text-gray-300'>Home</p></Link>
              <Link href="#Projects"><p className='hover:text-gray-300'>Projects</p></Link>
              <Link href="#Expr"><p className='hover:text-gray-300'>Experience</p></Link>
              <Link href="#Contact"><p className='hover:text-gray-300'>Contact</p></Link>
            </div>
          </main>
        </div>
      </nav>


    </>

  )
}

export default Headers