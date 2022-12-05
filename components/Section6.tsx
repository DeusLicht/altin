import React from "react";
import Image from "next/image";
import Link from "next/link";
import altinlogo from "../public/assets/AltinLogoBox.svg";
import stage from '../public/assets/Stage.svg'
import { motion } from "framer-motion";

const Section6 = () => {
	return (
		<motion.section className='relative py-32 bg-[#101010] snap-start' initial={{opacity:0}} whileInView={{opacity:1, transition:{ duration:1, delay:0.5 }}}>
			<div className='flex flex-col gap-5 mx-auto max-w-[1440px] items-center justify-center px-10 pb-14'>
				<Image src={altinlogo} alt='/' className='h-auto w-[120px] md:w-auto' />
				<h1 className='text-6xl md:text-7xl font-bold leading-snug text-center'>
					Coming Soon
					<span className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent'>
						.
					</span>
				</h1>
				<p className='text-[20px] md:text-2xl font-oxy text-center font-bold xl:mx-[350px] lg:mx-[250px] md:mx-[100px]'>
					Join our waitlist to be a part of our beta launch.
				</p>
				<Link href='/' className='mt-4  max-w-full'>
					<div className='relative group cursor-pointer'>
						<div className='absolute -inset-1  rounded-[6px] bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] group-hover:opacity-0 duration-200' />
						<button className='relative lg:py-[10px] w-full lg:px-20 px-10 py-2 rounded-[3px] bg-white group-hover:bg-transparent transition duration-200'>
							<span className='block bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent font-bold text-2xl pointer-events-auto group-hover:text-white transition duration-200'>
								Get Notified
							</span>
						</button>
					</div>
				</Link>
			</div>
            <Image src={stage} alt='/' className=' absolute bottom-0 left-[50%] transform translate-x-[-50%] hidden md:block'/>
		</motion.section>
	);
};

export default Section6;
