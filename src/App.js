import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import NavBar from "./components/NavBar";
function App() {
	return (
		<>
			<NavBar></NavBar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="about" element={<About></About>}></Route>
				<Route path="service" element={<Service></Service>}></Route>
				<Route path="contact" element={<Contact></Contact>}></Route>
				<Route path="*" element={<Home></Home>}></Route>
			</Routes>
		</>
	);
}

export default App;
