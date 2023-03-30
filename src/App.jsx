import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import "./App.css";

function App() {
	return (
		<main className='App'>
			<Router>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/product/:id' element={<ProductPage />} />
					<Route path='/wishlist' element={<Wishlist />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}

export default App;
