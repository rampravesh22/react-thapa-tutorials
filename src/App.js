import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBar from "./NavBar";
import Name from "./Name";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<NavBar></NavBar>
			<Routes>
				<Route path="/"  element={<Home></Home>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
				<Route path="/contact/:name" element={<Name></Name>}></Route>
				<Route path="*" element={<h1>Error</h1>}></Route>
			</Routes>
		</>
	);
}

export default App;
