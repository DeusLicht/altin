import React from 'react'
import interact from '../public/assets/Interactions.svg'
import traking1 from '../public/assets/Group 5.svg'
import traking2 from '../public/assets/Group 6.svg'
import traking3 from '../public/assets/Group 7.svg'
import Sales from '../public/assets/Group 8.svg'
import Image from 'next/image'
import ease from '../public/assets/Ease.svg'
import Atrack from '../public/assets/ATrack.svg'
import Analytics from '../public/assets/Analytics.svg'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <section className='md:flex justify-center bg-[#101010] snap-start'>
        <motion.div className='gap-3 max-w-[1440px] mx-auto px-10 pt-[120px]' initial={{opacity:0}} whileInView={{opacity:1, transition:{ duration:1, delay:0.5 }}}>
            {/*Title centered*/}
            <div className='flex flex-col justify-center items-center gap-y-5 mb-8'>
                <h2 className='text-6xl md:text-7xl font-bold leading-snug text-center'>Built for businesses
                                <span className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent'>.
                                </span></h2>
                <p className='text-[20px] md:text-2xl font-oxy text-center font-bold xl:mx-[350px] lg:mx-[250px] md:mx-[100px]'>We are simplifying merchant dashboards with a smart user interface and advanced functionality.</p>
            </div>
            {/*Div with 3 cards that flex col on top each other */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-y-5 justify-center items-center'>
                <div className='flex'>
                    <div className='relative mx-auto my-5 border border-[#B6B5B5] rounded-2xl h-[550px] w-[390px]'>
                        <div className='absolute rounded-t-2xl h-1/2 w-full card-bg'>
                            <Image src={interact} alt='simplifying interactions' className='mx-auto xl:px-0 px-5 mt-14  h-[76px]' />
                        </div>
                        <div className='flex flex-col absolute top-1/2 rounded-b-2xl h-1/2 md:justify-start justify-center'>
                            <h4 className=' font-oxy text-xs flex mx-auto ml-[43px] mt-5 items-center gap-2 font-bold'>
                                <span className=' self-center'>
                                    <Image src={ease} alt='Ease of Use' className='h-[14px] w-[14px] ' />
                                </span>
                                EASE OF USE
                            </h4>
                            <p className=' font-merri xl:text-2xl text-xl mt-3 mx-[43px] font-bold leading-snug'>
                                Built with a focus on 
                                    <span className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent'>  
                                    &nbsp; simplifying interactions 
                                    </span>
                            </p>
                            <p className=' font-oxy xl:text-[18px] mx-[43px] mt-3  font-bold leading-snug'>
                            Our merchant dashboards are designed to be intuitive and require a minimal learning curve.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                <div className='flex'>
                    <div className='relative mx-auto my-5 border border-[#B6B5B5] rounded-2xl h-[550px] w-[390px]'>
                        <div className='absolute rounded-t-2xl h-1/2 w-full card-bg flex flex-col justify-center'>
                            <Image src={traking1} alt='simplifying interactions' className='mx-auto xl:px-0 px-5 h-[76px]' />
                            <Image src={traking2} alt='simplifying interactions' className='mx-auto xl:px-0 px-5  h-[76px]' />
                            <Image src={traking3} alt='simplifying interactions' className='mx-auto xl:px-0 px-5 h-[76px]' />
                        </div>
                        <div className='flex flex-col absolute top-1/2 rounded-b-2xl h-1/2 md:justify-start justify-center'>
                            <h4 className=' font-oxy text-xs flex mx-auto ml-[43px] items-center gap-2 font-bold md:mt-5'>
                                <span className=' self-center'>
                                    <Image src={Atrack} alt='Ease of Use' className='h-[14px] w-[14px] ' />
                                </span>
                                ADVANCED TRACKING
                            </h4>
                            <p className=' font-merri xl:text-2xl text-xl mt-3 mx-[43px] font-bold leading-snug'>
                                <span className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent'>  
                                    Initiate and track
                                </span>
                                &nbsp; payments from a single dashboard
                            </p>
                            <p className=' font-oxy xl:text-[18px] mx-[43px] mt-3  font-bold leading-snug'>
                            Initiate and keep track of all your transactions as well as settlements from our simplified dashboard. 
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='md:col-span-full lg:col-auto col-au5'>
                <div className='flex'>
                    <div className='relative mx-auto my-5 border border-[#B6B5B5] rounded-2xl h-[550px] w-[390px]'>
                        <div className='absolute rounded-t-2xl h-1/2 w-full card-bg flex flex-col justify-center'>
                            <Image src={Sales} alt='simplifying interactions' className='mx-auto xl:px-0 px-5 h-[163px]' />
                        </div>
                        <div className='flex flex-col absolute top-1/2 rounded-b-2xl h-1/2 md:justify-start justify-center'>
                            <h4 className=' font-oxy text-xs flex mx-auto ml-[43px] items-center gap-2 font-bold md:mt-5'>
                                <span className=' self-center'>
                                    <Image src={Analytics} alt='Ease of Use' className='h-[14px] w-[14px] ' />
                                </span>
                                DETAILED ANALYTICS
                            </h4>
                            <p className=' font-merri xl:text-2xl text-xl mt-3 mx-[43px] font-bold leading-snug'>
                            Advanced reporting and &nbsp;
                                    <span className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent'>  
                                     sales analytics
                                    </span>
                            </p>
                            <p className=' font-oxy xl:text-[18px] mx-[43px] mt-3  font-bold leading-snug'>
                            Our sales analytics and reporting systems are designed to provide businesses maximum functionality. 
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Section3