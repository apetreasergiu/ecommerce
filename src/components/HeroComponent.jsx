import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import HeroImg from "../assets/hero.png";

const Hero = () => {
	return (
		<section className='h-screen py-24'>
			<div className='container mx-auto flex flex-col lg:flex-row justify-between h-full text-black'>
				<div className='flex-1 lg:flex-[55%] order-2 lg:order-1 flex flex-col justify-center gap-y-6'>
					<div className='font-semibold flex items-center uppercase text-xs lg:text-base justify-center lg:justify-start'>
						<div className='w-10 h-[1px] lg:h-[2px] bg-accent mr-3' />
						New Trend
						<div className='w-10 lg:w-0 h-[1px] lg:h-[2px] bg-accent ml-3' />
					</div>

					<h1 className='text-3xl lg:text-[70px] xl:text-[80px] leading-[1.1] font-extralight font-logo text-center lg:text-left'>
						Men's And Women's Clothing Online
					</h1>

					<Link
						to={"/products"}
						className='w-fit self-center lg:self-start text-center text-xs lg:text-base uppercase font-semibold border-b-[1px] lg:border-b-2 border-accent hover:text-accent transition duration-300'>
						Discover More
					</Link>
				</div>

				<div className='flex-1 lg:flex-[45%] w-full h-full flex items-center justify-center lg:justify-end order-1 lg:order-2'>
					<img
						src={HeroImg}
						alt='hero'
						className='h-[50vh] xl:h-[50vh] object-cover'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
