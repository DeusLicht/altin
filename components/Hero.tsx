import React from 'react'
import Image from 'next/image'
import Gplay from '../public/assets/Gplay.svg'
import AppStore from '../public/assets/AppStore.svg'
import Link from 'next/link'
import { motion } from 'framer-motion'

const textVariant = {

  onscreen:{
    opacity:1,
    transition:{
      ease: 'easeOut',
      staggerDirection: 1,
      staggerChildren: 0.2
    }
  }
}

const childVariant = {
  hidden: {
    x:-30,
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{
      ease: "anticipate",
      duration: 1
    }
  }
}


const scaleVariant = {
    hidden: {
      scale: .8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.5
      }
    }
}

const Hero = () => {
  return (
    <motion.section className='h-screen bg-gradient-radial-at-t  from-[#51103d] via-neutral-900 to-neutral-900 snap-center'  initial='hidden' animate='visible' variants={scaleVariant}>
    <div className='relative min-h-screen bg-cover bg-center custom-img flex flex-col justify-center'>
      <div className='relative bg-black min-h-screen bg-opacity-30 flex z-1'>
        <div className='flex flex-col w-[1440px] justify-center mx-auto z-10'>
          <motion.div className='sm:w-[50%] px-10' variants={textVariant} whileInView='onscreen'>
            <motion.h2 className='sm:text-6xl text-5xl font-bold  mb-4 leading-snug sm:leading-snug' variants = {childVariant} initial='hidden' whileInView='visible'>Crypto payments simplified.</motion.h2>
            <motion.p className='py-5 sm:text-2xl text-xl mb-4 leading-snug sm:leading-snug' variants = {childVariant} initial='hidden' whileInView='visible'>We are making crypto payments simple, reliable and accessible to the MENA region. </motion.p>
            <motion.h3 className='lg:text-5xl md:text-4xl text-3xl font-bold mb-4 leading-snug' variants = {childVariant} initial='hidden' whileInView='visible'>Coming Soon.</motion.h3>
            <motion.div className='flex gap-5 mt-10' variants = {childVariant} initial='hidden' whileInView='visible'>
              <button className='hover:scale-110 transition duration-200'>
                <Link href='/'>
                  <Image src={Gplay} alt= 'Get Altin on Google Play Store Now!' className='md:w-[174px] h-auto w-[150px] cursor-pointer'/>
                </Link>
              </button>
              <button className='hover:scale-110 transition duration-200'>
                <Link href='/'>
                  <Image src={AppStore} alt= 'Get Altin on Apple App Store Now!' className='md:w-[174px] h-auto w-[150px] cursor-pointer'/>
                </Link>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    </motion.section> 
  )
}

export default Hero
