import React, { useState, useEffect } from "react";

const PopularProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div className='p-6'>
			<h2 className='text-2xl font-semibold mb-4'>Produse populare</h2>
			<p className='text-sm mb-6'>O mică descriere a produselor populare</p>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
				{products.map((product) => (
					<div
						key={product.id}
						className='bg-white rounded-lg overflow-hidden shadow-md'>
						<img
							src={product.image}
							alt={product.title}
							className='w-full h-48 object-cover'
						/>
						<div className='p-4'>
							<h3 className='text-lg font-semibold truncate'>
								{product.title}
							</h3>
							<p className='text-sm text-gray-600 mt-1'>${product.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularProducts;
