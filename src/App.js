import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import { Home } from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
	return (
		<>
			<div className="nav-bar">
				<NavBar></NavBar>
			</div>
			<div className="routes">
				<Routes>
					<Route path="/home" element={<Home></Home>}></Route>
					<Route path="/About" element={<About></About>}></Route>
					<Route path="/contact" element={<Contact></Contact>}></Route>
					<Route path= "/Login" element={<Login></Login>}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
