import React from "react";
import category1Image from "../assets/category1.jpg";
import category2Image from "../assets/category2.jpg";
import category3Image from "../assets/category3.jpg";
import { Link } from "react-router-dom";

const categories = [
	{
		name: "Men's Clothing",
		image: category1Image,
	},
	{
		name: "Women's Clothing",
		image: category2Image,
	},
	{
		name: "Jewelery",
		image: category3Image,
	},
];

const CategoryList = () => {
	return (
		<section className='flex items-center justify-center h-full'>
			<ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{categories.map((category) => (
					<li key={category.name} className='relative'>
						<img
							src={category.image}
							alt={category.name}
							className='w-full h-64 object-cover rounded-lg'
						/>
						<div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-25 text-white rounded-lg p-4'>
							<h3 className='text-lg font-semibold'>{category.name}</h3>
							<Link
								to='/products'
								className='text-white hover:text-indigo-700 inline-block mt-2 underline'>
								Discover Now
							</Link>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default CategoryList;
