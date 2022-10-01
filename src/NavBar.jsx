import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<div className="nav_bar">
				<li>
					<Link style={{color:'black'}} to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</div>
		</>
	);
};

export default NavBar;
