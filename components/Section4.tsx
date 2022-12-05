import React from 'react'
import { motion } from 'framer-motion'
import solana from '../public/assets/Solana.svg'
import etereum from '../public/assets/Etereum.svg'
import bitcoin from '../public/assets/Group 10.svg'
import cardano from '../public/assets/Cardano.svg'
import altin from '../public/assets/altin.svg'
import usdc from '../public/assets/usdc.svg'
import avalanche from '../public/assets/Avalanche.svg'
import polka from '../public/assets/Polkadot.svg'
import matic from '../public/assets/Matic.svg'
import Image from 'next/image'

const whileInViewVariant = {
  initial:{
    position: 'absolute'
  },
  final:{
    position: 'relative'
  }
}


const Section4 = () => {
  return (
    <section className='flex justify-center bg-[#101010] snap-start'>
    <motion.div className='relative max-w-[1440px] mx-auto px-10 pt-32 pb-16'  initial={{opacity:0}} whileInView={{opacity:1, transition:{ duration:1 }} } viewport={{amount:0.6}}>
        {/*Title centered*/}
        <motion.div className='flex flex-col justify-center items-center gap-y-5' >
            <h2 className='text-6xl md:text-7xl font-bold leading-snug text-center'>Made for the people
                            <span className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent'>.
                            </span></h2>
            <p className='text-[20px] md:text-2xl font-oxy text-center font-bold xl:mx-[350px] lg:mx-[250px] md:mx-[100px]'>We support transactions for the top 25 tokens by market cap so you don’t ever have to worry about trade pairs for conversions. </p>
        </motion.div>
        <motion.div className='relative h-[660px] mx-auto'>
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center 'initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0  
            }}
            whileInView = {{
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 1,  
            transition:{
              duration: 1,
              delay: 0.5
            }
            }}>
            <Image src={solana} alt='/' className='w-[40px] h-auto md:w-[50px] lg:w-[60px]'></Image>
          </motion.div>
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center' initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0  
            }}
            whileInView = {{
            position: 'absolute',
            top: '32%',
            left: '32%',
            transform: 'translate(-50%, -50%)',
            opacity:1,
            transition:{
              duration: 1,
              delay: 0.5
            }
            }}>
            <Image src={etereum} alt='/' className='w-[25px] h-auto md:w-[35px] lg:w-[45px]'></Image>
          </motion.div>
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center' initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0  
            }}
            whileInView = {{
            position: 'absolute',
            top: '32%',
            left: '68%',
            transform: 'translate(-50%, -50%)',
            opacity:1,
            transition:{
              duration: 1,
              delay: 0.5
            }  
            }}>
            <Image src={bitcoin} alt='/' className='w-[50px] h-auto md:w-[60px] lg:w-[70px]'></Image>
          </motion.div>
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center'initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0  
            }}
            whileInView = {{
            position: 'absolute',
            top: '50%',
            left: '15%',
            transform: 'translate(-50%, -50%)',
            opacity:1,
            transition:{
              duration: 1,
              delay: 0.5
            }  
            }}>
            <Image src={cardano} alt='/' className='w-[55px] h-auto md:w-[65px] lg:w-[75px]'></Image>
          </motion.div>
          
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center' initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity:0  
            }}
            whileInView = {{
            position: 'absolute',
            top: '50%',
            left: '85%',
            transform: 'translate(-50%, -50%)',
            opacity:1,
            transition:{
              duration: 1,
              delay: 0.5
            }  
            }}>
            <Image src={usdc} alt='/' className='w-[55px] h-auto md:w-[65px] lg:w-[75px]'></Image>
          </motion.div>
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center'initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity:0 
            }}
            whileInView = {{
            position: 'absolute',
            top: '68%',
            left: '32%',
            transform: 'translate(-50%, -50%)',
            opacity:1,
            transition:{
              duration: 1,
              delay: 0.5
            }  
            }}>
            <Image src={avalanche} alt='/' className='w-[55px] h-auto md:w-[65px] lg:w-[75px]'></Image>
          </motion.div>
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center' initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity:0  
            }}
            whileInView = {{
            position: 'absolute',
            top: '68%',
            left: '68%',
            transform: 'translate(-50%, -50%)' ,
            opacity:1,
            transition:{
              duration: 1,
              delay: 0.5
            } 
            }}>
            <Image src={polka} alt='/' className='w-[55px] h-auto md:w-[65px] lg:w-[75px]'></Image>
          </motion.div>
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center' initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity:0  
            }}
            whileInView = {{
            position: 'absolute',
            top: '85%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity:1,
            transition:{
              duration: 1,
              delay: 0.5
            }  
            }}  >
            <Image src={matic} alt='/' className='w-[55px] h-auto md:w-[65px] lg:w-[75px]'></Image>
          </motion.div>
          <motion.div className=' bg-[#2629275b] rounded-[50%] lg:w-[135px] lg:h-[135px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-auto flex items-center justify-center' initial={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            backgroundColor: '#101010',
            transform: 'translate(-50%, -50%)'  
            }}
            whileInView = {{
            position: 'absolute',
            top: '50%',
            left: '50%',
            backgroundColor: '#2629275b',
            transform: 'translate(-50%, -50%)',
            transition:{
              duration: 1,
              delay: 0.5
            }  
            }}>
            <Image src={altin} alt='/' className='w-[60px] h-auto md:w-[70px] lg:w-[80px]'></Image>
          </motion.div>
        </motion.div>
    </motion.div>
  </section>
  )
}

export default Section4