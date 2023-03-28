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
			<table>
				<caption>My Wishlist</caption>
				<tbody>
					{wishlistProducts.map((product, index) => {
						return (
							<tr key={"product_" + index}>
								<td>
									<img src={product.image} alt={product.title} width='50' />
								</td>
								<td>{product.title}</td>
								<td>{product.price}</td>
								<td>
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
		</>
	);
}

export default Wishlist;
