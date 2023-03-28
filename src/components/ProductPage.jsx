import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, [id]);

	if (!product) {
		return (
			<section className='h-screen flex justify-center items-center'>
				Loading...
			</section>
		);
	}

	const { title, price, description, image } = product;
	return (
		<section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
			<div className='container mx-auto'>
				{/* image & text wrapper */}
				<div className='flex flex-col lg:flex-row items-center'>
					{/* image */}
					<div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
						<img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
					</div>
					{/* text */}
					<div className='flex-1 text-center lg:text-left'>
						<h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
							{title}
						</h1>
						<div className='text-xl text-red-500 font-medium mb-6'>
							$ {price}
						</div>
						<p className='mb-8'>{description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
