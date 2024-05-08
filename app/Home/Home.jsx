import React from 'react'
import Headers from '../components/Headers/Headers'
import HomeTop from './HomeTop'
import Expr from './Expr'
import Projects from './Projects'
import CardsParallax2 from './CardsParallax2/CardsParallax2'
import ProcessBar from '../components/ProcessBar/ProcessBar'
import Experience from './Experience'
import Contact from './Contact'


const Home = () => {
    return (
        <div className=''>
            <ProcessBar />
            <Headers />
            <div className='bg-[#161513] pt-[90px]'>
                <HomeTop />
                <Expr />
                {/* <Projects/> */}
                <CardsParallax2 />
                <Experience />
                <Contact />
            </div>
        </div>
    )
}

export default Home