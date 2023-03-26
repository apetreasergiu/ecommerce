import React, { useState, useEffect } from "react";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setCategories([...new Set(data.map((product) => product.category))]);
			});
	}, []);

	const filteredProducts = products.filter((product) => {
		const matchesCategory = selectedCategory
			? product.category === selectedCategory
			: true;
		const matchesSearchTerm = searchTerm
			? product.title.toLowerCase().includes(searchTerm.toLowerCase())
			: true;
		return matchesCategory && matchesSearchTerm;
	});

	return (
		<div className='max-w-6xl mx-auto px-4 py-4'>
			<h1 className='text-3xl font-semibold mb-4'>Pagina Produse</h1>
			<div className='flex'>
				<div className='w-1/4 mr-4'>
					<h2 className='text-xl font-semibold mb-2'>Categorii</h2>
					<ul>
						{categories.map((category) => (
							<li key={category}>
								<button
									className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-200 ${
										category === selectedCategory ? "bg-gray-200" : ""
									}`}
									onClick={() => setSelectedCategory(category)}>
									{category}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className='w-3/4'>
					<input
						type='text'
						placeholder='Cauta produse...'
						className='w-full py-2 px-4 rounded mb-4'
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<ul className='grid grid-cols-4 gap-4'>
						{filteredProducts.map((product) => (
							<li key={product.id} className='mb-2'>
								<div className='border rounded p-4'>
									<h3 className='text-lg font-semibold'>{product.title}</h3>
									<img
										src={product.image}
										alt={product.title}
										className='w-full sm:w-1/2 object-cover'
										style={{ height: "380px" }}
									/>
									<div className='flex flex-col justify-between mt-4 sm:mt-0 sm:ml-4 sm:w-1/2'>
										<h3 className='text-lg font-semibold'>{product.title}</h3>
										<div className='flex justify-between items-center'>
											<p>Preț: {product.price}</p>
											<button className='bg-blue-500 text-white py-2 px-4 rounded'>
												Add to wishlist
											</button>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Products;
