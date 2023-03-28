import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className='bg-gray-100 shadow-md relative mt-auto w-full transition-all duration-300'>
			<div className='px-4 py-4'>
				<div className='flex justify-between items-center'>
					<div>
						<div className='text-center font-semibold text-lg py-2.5 px-4 mb-2'>
							OutStock &copy; 2023
						</div>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='block text-lg py-2.5 px-4 rounded hover:bg-gray-200'>
								Home
							</a>
							<a
								href='#'
								className='block text-lg py-2.5 px-4 rounded hover:bg-gray-200'>
								Products
							</a>
						</div>
					</div>
					<div className='flex space-x-4'>
						<a
							href='https://www.linkedin.com/in/sergiu-apetrea-794095250/'
							target='_blank'
							rel='noreferrer'
							className='block py-2 px-3 rounded hover:bg-gray-200'>
							<FiLinkedin size={24} />
						</a>
						<a
							href='https://github.com/apetreasergiu/'
							target='_blank'
							rel='noreferrer'
							className='block py-2 px-3 rounded hover:bg-gray-200'>
							<FiGithub size={24} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
