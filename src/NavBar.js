import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<>
         <div className="nav-bar__logo">
            <NavLink to="/home">Myweb</NavLink>
         </div>
			<ul className="nav-bar__link">
				<li>
					<NavLink to="/home">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</>
	);
};

export default NavBar;
