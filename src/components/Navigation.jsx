import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-gray-100 shadow-md'>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='flex justify-between'>
					<div className='flex space-x-4'>
						<div className='hidden md:flex space-x-4'>
							<Link
								to='/'
								className='block text-lg py-2.5 px-4 rounded hover:bg-gray-200'>
								Home
							</Link>
							<Link
								to='/products'
								className='block text-lg py-2.5 px-4 rounded hover:bg-gray-200'>
								Products
							</Link>
						</div>
					</div>
					<div className='text-center font-semibold text-lg py-2.5 px-4'>
						OutStock
					</div>
					<div className='flex space-x-4'>
						<div className='hidden md:block'>
							<Link
								to='/wishlist'
								className='block text-lg py-2.5 px-4 rounded hover:bg-gray-200'>
								Wishlist
							</Link>
						</div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='md:hidden rounded-lg focus:outline-none focus:shadow-outline'>
							<FiMenu size={24} />
						</button>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className='md:hidden max-w-6xl mx-auto px-4'>
					<Link
						to='/'
						className='block text-lg py-2.5 px-4 rounded hover:bg-gray-200'>
						Home
					</Link>
					<Link
						to='/products'
						className='block text-lg py-2.5 px-4 rounded hover:bg-gray-200'>
						Products
					</Link>
					<Link
						to='/wishlist'
						className='block text-lg py-2.5 px-4 rounded hover:bg-gray-200'>
						Wishlist
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
