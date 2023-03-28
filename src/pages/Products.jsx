import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleCategoryChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	const filteredProducts = products.filter((product) => {
		return (
			product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedCategory === "" || product.category === selectedCategory)
		);
	});
	const onAddToWishlist = (product) => {
		let wishlistProducts = [];
		const productsString = localStorage.getItem("produse");
		if (productsString !== null) {
			wishlistProducts = JSON.parse(productsString);
		}
		wishlistProducts.push(product);
		localStorage.setItem("produse", JSON.stringify(wishlistProducts));
	};

	return (
		<div>
			<div className='flex justify-between items-center mb-4'>
				<input
					type='text'
					placeholder='Search...'
					value={searchTerm}
					onChange={handleSearchChange}
					className='border border-gray-400 p-2 rounded'
				/>
				<select
					value={selectedCategory}
					onChange={handleCategoryChange}
					className='border border-gray-400 p-2 rounded'>
					<option value=''>All Categories</option>
					<option value="men's clothing">Men's Clothing</option>
					<option value="women's clothing">Women's Clothing</option>
					<option value='jewelery'>Jewelery</option>
					<option value='electronics'>Electronics</option>
				</select>
			</div>
			<div className='flex flex-wrap'>
				{filteredProducts.map((product) => (
					<div key={product.id} className='w-full md:w-1/2 lg:w-1/4 p-4'>
						<div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
							<div className='w-full h-full flex justify-center items-center'>
								<div className='w-[200px] mx-auto flex justify-center items-center'>
									<img
										className='max-h-[160px] group-hover:scale-110 transition duration-300'
										src={product.image}
										alt={product.title}
									/>
								</div>
							</div>

							<div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
								<button onClick={() => onAddToWishlist(product)}>
									<div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
										<BsPlus className='text-3xl' />
									</div>
								</button>
								<Link
									to={`/product/${product.id}`}
									className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
									<BsEyeFill />
								</Link>
							</div>
						</div>

						<div>
							<div className='text-sm capitalize text-gray-500 mb-1'>
								{product.category}
							</div>
							<Link to={`/product/${product.id}`}>
								<h2 className='font-semibold mb-1'>{product.title}</h2>
							</Link>
							<div className='font-semibold'>$ {product.price}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
