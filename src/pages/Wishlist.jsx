import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { FiTrash2 } from "react-icons/fi";

function Wishlist() {
	const [wishlistProducts, setWishlistProducts] = useState([]);

	useEffect(() => {
		const productsString = localStorage.getItem("produse");
		if (productsString !== null) {
			const products = JSON.parse(productsString);
			setWishlistProducts(products);
		}
	}, []);

	const onDelete = (productId) => {
		const filteredProducts = wishlistProducts.filter(
			(product) => product.id !== productId
		);
		localStorage.setItem("produse", JSON.stringify(filteredProducts));
		setWishlistProducts(filteredProducts);
	};

	return (
		<>
			<div className='flex items-center justify-center mb-4'>
				<hr className='w-1/4' />
				<h2 className='text-2xl mx-4'>My Wishlist</h2>
				<hr className='w-1/4' />
			</div>
			<div className='mx-auto'>
				<table className='w-full'>
					<tbody>
						{wishlistProducts.map((product, index) => {
							return (
								<tr key={"product_" + index}>
									<td>
										<img src={product.image} alt={product.title} width='50' />
									</td>
									<td>{product.title}</td>
									<td>{product.price}</td>
									<td className='pl-4'>
										<Button
											color='danger'
											onClick={() => {
												onDelete(product.id);
											}}>
											<FiTrash2 />
										</Button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Wishlist;
