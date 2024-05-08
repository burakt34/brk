import React from 'react'
import "../globals.css"
import Link from 'next/link'

const HomeTop = () => {
    return (
        <div className='px-4 md:px-20 h-[100vh-88]'>
            <div className='flex items-center justify-center pt-16'>
                <img className='w-52 h-52' src="./Avatar.png" />
            </div>
            <div className='flex flex-col items-center justify-center text-white'>
                <p className='text-6xl font-extrabold text-center mt-10'>Dynamic Developer and Content Producer <br /> Open to  <span className='spnc'>New Challenges</span></p>
                <p className='text-xl font-light tracking-[0.36px] w-8/12 text-center mt-7'>I am a web front-end development specialist with one year of experience, specializing in front-end development. My expertise lies in translating designs into error-free code and creating responsive web applications.</p>
            </div>
            <div className='md:flex w-full items-center justify-center md:space-x-4 mt-12'>
                <button className='mb-4 md:mb-0 w-full md:w-48 h-16 rounded-[50px] bg-white border border-white hover:bg-gray-300'><Link className='w-full h-full' href="https://burakt34.github.io/cv/"><p className='text-center text-inherit text-xl font-semibold'>Get In Touch</p></Link></button>
                <button className='w-full md:w-48 h-16 rounded-[50px] bg-[#161513] border border-white hover:bg-zinc-900'><Link className='w-full h-full' href="https://burakt34.github.io/cv/"><p className='text-center text-white text-xl font-semibold'>Download CV</p></Link></button>
            </div>

        </div>
    )
}

export default HomeTop