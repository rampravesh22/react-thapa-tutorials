import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/service" element={<Service></Service>}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
			</Routes>
		</>
	);
}

export default App;
