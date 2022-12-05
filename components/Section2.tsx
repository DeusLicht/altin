import React from 'react'
import Image from 'next/image'
import drop from '../public/assets/Drop.svg'
import icon from '../public/assets/Icon.svg'
import token from '../public/assets/Token.svg'
import stage from '../public/assets/Stage.svg'
import { delay, motion, Variants } from 'framer-motion'

const textVarient = {

  onscreen:{
    opacity:1,
    transition:{
      ease: 'easeOut',
      staggerDirection: 1,
      staggerChildren: 0.1
    }
  }
}

const childVarient = {
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

const boxVariant = {
  hidden: {
    x:30,
    opacity:0,
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



const Section2 = () => {
  return (
    <section className='relative flex justify-center bg-[#101010] snap-start'>
    <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1440px] mx-auto px-10 py-36 items-center' variants={textVarient} whileInView='onscreen' >
      {/*Grid column 1 with span row 3 */}
      <div className='flex flex-col mx-auto'>
          <motion.h2 className='font-bold my-4 leading-snug sm:leading-snug text-5xl sm:text-6xl' variants = {childVarient} initial='hidden' whileInView='visible'>Altin at a glance<span className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent'>.
                                </span></motion.h2>
          <motion.p className='py-5 sm:text-2xl text-xl mb-4 leading-snug sm:leading-snug' variants = {childVarient} initial='hidden' whileInView='visible'>We’re solving the biggest issue that merchants and crypto holders face in the MENA region.</motion.p>
          <motion.h3 className='md:text-4xl text-3xl md:leading-snug font-bold mb-4 leading-snug' variants = {childVarient} initial='hidden' whileInView='visible'>“The absence of a singular ecosystem that can process a crypto transaction.” </motion.h3>
      </div>
      {/*Grid column 2 with 3 div for 3 box in left - middle - right formations and animations from right to left on scroll */}
      <div className=' relative flex flex-col  gap-y-5'>
          <motion.div className='w-[265px] h-[206px] sm:self-start self-center p-[2px] rounded-[6px] bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1]' layout variants={boxVariant} initial='hidden' whileInView='visible'>
            <div className='relative h-full font-semibold rounded-[6px] bg-[#1A191B] flex flex-col gap-y-3'>
                <h4 className='text-[17px] font-bold flex gap-x-2 mx-5 mr-auto mt-5'>
                  <span>
                    <Image src={drop} alt='On Ramp' className='w-[23px] h-[24.85px]'/>
                    </span>
                    On Ramp
                    </h4>
                <p className=' text-[15px] font-oxy font-light leading-snug mx-4'>Our on ramp solution will enable users to purchase digital assets instantly through their existing credit/debit cards without having to purchase or convert their tokens for transactions. </p>    
            </div>
          </motion.div>
          <motion.div className='w-[265px] h-[206px] self-center p-[2px] rounded-[6px] bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1]' layout variants={boxVariant} initial='hidden' whileInView='visible'>
            <div className='relative h-full font-semibold rounded-[6px] bg-[#1A191B] flex flex-col gap-y-3'>
                <h4 className='text-[17px] font-bold flex gap-x-2 mx-5 mr-auto mt-5 self-center'>
                  <span className=' self-center'>
                    <Image src={icon} alt='Brand Portal' className='w-[25px]'/>
                    </span>
                    Brand Portal
                    </h4>
                <p className=' text-[15px] font-oxy font-light leading-snug mx-4'>Our brand portal is a revolutionary offering that will open up our partnered businesses to a new market comprising of crypto holders who are looking for new avenues to spend their crypto.</p>
            </div>
          </motion.div>
          <motion.div className='w-[265px] h-[206px] sm:self-end self-center p-[2px] rounded-[6px] bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1]' layout variants={boxVariant} initial='hidden' whileInView='visible'>
            <div className='relative h-full font-semibold rounded-[6px] bg-[#1A191B] flex flex-col gap-y-3'>
                <h4 className='text-[17px] font-bold flex gap-x-2 mx-5 mr-auto mt-5 self-center'>
                  <span className=' self-center'>
                    <Image src={token} alt='Off Ramp' className='w-[25px]'/>
                    </span>
                    Off Ramp
                    </h4>
                <p className=' text-[15px] font-oxy font-light leading-snug mx-4'>Our off ramp solution caters to the needs of both merchants and customers by offering a simplified method to purchase high value commodities, whilst also providing easy settlement methods.</p>
            </div>
          </motion.div>
      </div>
    </motion.div>
    <Image src={stage} alt='/' className=' absolute bottom-0 left-[50%] transform translate-x-[-50%] hidden md:block'/>
    </section>
  )
}

export default Section2