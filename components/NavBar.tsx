import React from "react";
import Image from "next/image";
import Logo from "../public/assets/AltinLogo.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = () => {
	return (
		<motion.header
			className='sticky top-0 w-full h-[115px] z-50 flex justify-center items-center bg-[#101010] bg-opacity-80 shadow-sm bg-clip-padding blur-backdrop-filter '
			initial='hidden'
			animate='visible'
			variants={{
				hidden: {
					y: -100,
				},
				visible: {
					y: 0,
					transition: {
						duration: 0.2,
					},
				},
			}}>
			<div className='flex max-w-[1440px] w-full h-full justify-between items-center'>
				<div className='md:px-4 px-5'>
					<Link href='/'>
						<Image
							src={Logo}
							alt='Altin Crypto Payments'
							className='md:w-[225px] sm:w-[190px] h-auto w-[170px] cursor-pointer'
						/>
					</Link>
				</div>
				<div className='md:px-4 px-5'>
					<Link href='/'>
						<div className='relative group cursor-pointer'>
							<div className='absolute -inset-1  rounded-[6px] bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] group-hover:opacity-0 duration-200' />
							<button className='relative md:px-12 md:py-[10px] py-2 px-6 font-semibold rounded-[3px] bg-white group-hover:bg-transparent transition duration-200'>
								<span className='block bg-gradient-to-r from-[#A61A7A] to-[#FD8AF1] bg-clip-text text-transparent sm:text-base text-xs pointer-events-auto group-hover:text-white transition duration-200'>
									Get Notified
								</span>
							</button>
						</div>
					</Link>
				</div>
			</div>
		</motion.header>
	);
};

export default NavBar;
