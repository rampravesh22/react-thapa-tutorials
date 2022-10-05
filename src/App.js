import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { Route, Routes ,Navigate} from "react-router-dom";
import Logout from "./components/Logout";
import Search from "./components/Search";
function App() {
	return (
		<>
			<NavBar></NavBar>
			<div className="routes_container">
				<Routes>
					<Route path="/home" element={<Home></Home>}></Route>
					<Route path="/search" element={<Search></Search>}>Search</Route>
					<Route path="/about" element={<About></About>}></Route>
					<Route path="/contact" element={<Contact></Contact>}></Route>
					<Route path="/login/" element={<Login></Login>}></Route>
					<Route path="/logout/" element={<Logout></Logout>}></Route>
					<Route path="*" element={<Navigate to="/home" replace></Navigate>}></Route>
				</Routes>
			</div>
		</>
	);
}
export default App;
