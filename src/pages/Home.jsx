import React from "react";
import HeroComponent from "../components/HeroComponent";
import PopularProducts from "../components/PopularProducts";
import CategoryList from "../components/CategoryList";

function Home() {
	return (
		<div>
			<HeroComponent />
			<CategoryList />
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<hr style={{ width: "30%" }} />
				<h2 style={{ margin: "0 20px", fontSize: "24px" }}>
					Trending Products
				</h2>
				<hr style={{ width: "30%" }} />
			</div>
			<PopularProducts />
		</div>
	);
}

export default Home;
