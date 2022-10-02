import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Logout from "./components/Logout";

function App() {
	return (
		<>
            <NavBar></NavBar>
            <Routes>
               <Route path="/home"  element={<Home></Home>}></Route>
               <Route path="/about" element={<About></About>}></Route>
               <Route path="/contact" element={<Contact></Contact>}></Route>
               <Route path="/login/" element={<Login></Login>}></Route>
               <Route path="/logout/" element={<Logout></Logout>}></Route>
               <Route path="*" element={<h1>Error</h1>}></Route>
            </Routes>
		</>
	);
}

export default App;
