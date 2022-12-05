import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const textVariant = {
	onscreen: {
		opacity: 1,
		transition: {
			ease: "easeOut",
			delay: 1,
			staggerDirection: 1,
			staggerChildren: 0.1,
		},
	},
};

const childVariant = {
	hidden: {
		x: -30,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "anticipate",
			duration: 1,
		},
	},
};

const boxVariant = {
	hidden: {
		x: 30,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "anticipate",
			duration: 1,
		},
	},
};

const Section5 = () => {
	return (
		<section className=' relative py-32 bg-[#101010] snap-center'>
			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 relative max-w-[1440px] mx-auto px-10 '
				variants={textVariant}
				whileInView='onscreen'>
				<div className='flex flex-col mx-auto'>
					<motion.h2
						className=' font-merri font-bold leading-snug sm:leading-snug text-4xl sm:text-5xl'
						variants={childVariant}
						initial='hidden'
						whileInView='visible'>
						We’re revolutionizing the crypto payments journey
						<span className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent'>
							.
						</span>
					</motion.h2>
					<motion.p
						className='py-5 font-oxy font-light sm:text-2xl text-xl leading-snug sm:leading-snug'
						variants={childVariant}
						initial='hidden'
						whileInView='visible'>
						Our approach is unique and our vision is defined. We are at the
						precipice of linking and simplifying the journey from existing
						finance to crypto for the masses.
					</motion.p>
				</div>
				<div className=''>
					<motion.div
						className='h-[504px] max-w-[600px] p-[2px]  mx-auto rounded-[6px] bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1]'
						layout
						variants={boxVariant}
						initial='hidden'
						whileInView='visible'>
						<div className='h-full flex flex-col justify-center rounded-[6px] bg-[#101010]'>
							<div className=' flex flex-col gap-1 px-7 sm:px-10 lg:px-14 xl:px-16'>
								<h1 className='bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent font-bold lg:text-7xl md:text-5xl text-[44px]'>
									Simplified.
								</h1>
								<ul className='my-5 pl-5'>
									<li className='listImage font-oxy text-lg py-2 leading-snug'>
										{" "}
										3 click on-ramp process{" "}
									</li>
									<li className='listImage font-oxy text-lg py-2 leading-snug'>
										{" "}
										Zero fees on transactions{" "}
									</li>
									<li className='listImage font-oxy text-lg py-2 leading-snug'>
										{" "}
										Single platform for entire off-ramp process{" "}
									</li>
									<li className='listImage font-oxy text-lg py-2 leading-snug'>
										{" "}
										Advanced KYC, KYT and AML practices{" "}
									</li>
								</ul>
								<div className='md:px-4 px-5'>
									<Link href='/'>
										<div className='relative group cursor-pointer'>
											<div className='absolute -inset-1  rounded-[6px] bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] group-hover:opacity-0 duration-200' />
											<button className='relative lg:py-[15px] w-full py-2 rounded-[3px] bg-white group-hover:bg-transparent transition duration-200'>
												<span className='block bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent font-bold text-2xl pointer-events-auto group-hover:text-white transition duration-200'>
													FAQ
												</span>
											</button>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Section5;
