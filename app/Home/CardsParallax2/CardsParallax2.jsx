'use client';
import styles from './page.module.scss'
import { projects } from '../CardsParallax2/data';
import Card from '../../components/Card/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Link from 'next/link';

export default function CardsParallax2() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <div className='px-4 ' id='Projects'>
      <h2 className='text-center text-4xl text-white pt-[80px]'>Projects</h2>
      <main ref={container} className={styles.main}>
        {
          projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
          })
        }
      </main>
    </div>

  )
}