import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<main className='App'>
			<Router>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/wishlist' element={<Wishlist />} />
				</Routes>
			</Router>
			<Footer />
		</main>
	);
}

export default App;
