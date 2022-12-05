import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import Logo from "../public/assets/AltinLogo.svg";

const Footer = () => {
	return (
		<section className='relative bg-[#11131599] snap-start pt-16 pb-6'>
			<div className='max-w-[1440px] mx-auto flex justify-between'>
				<div className='flex flex-col gap-3 md:px-4 px-5'>
					<svg
						width='200'
						height='2'
						viewBox='0 0 200 2'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M0 1L131 0.999989' stroke='#FFFFFF' stroke-width='1' />
					</svg>
					<h3 className='md:text-xl font-ubuntu font-medium'>Find us on</h3>
					<div className='flex gap-4'>
						<Link href='/'>
							<AiOutlineTwitter size={"25px"} />
						</Link>
						<Link href='/'>
							<AiFillLinkedin size={"25px"} />
						</Link>
						<Link href='/'>
							<FaDiscord size={"25px"} />
						</Link>
					</div>
					<p className='sm:text-sm text-xs font-ubuntu font-light opacity-60'>
						© 2022 Altin Softwares LLC. All Rights Reserved. DED License no:
						1044054.
					</p>
				</div>
				<div className='flex flex-col items-end gap-5 md:px-4 px-5'>
					<Link href='/'>
						<Image
							src={Logo}
							alt='Altin Crypto Payments'
							className='md:w-[188px] sm:w-[170px] h-auto w-[155px] cursor-pointer'
						/>
					</Link>
					<p className='font-ubuntu leading-snug sm:text-xl text-sm text-right mr-4'>
						Crypto Payments simplified.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
