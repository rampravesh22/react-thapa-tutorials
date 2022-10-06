import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const NavBar = () => {
	return (
		<>
			<div className="nav-bar">
				<ul className="nav-bar__ul">
					<li>
						<NavLink to="/home">Home</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/post/mobile/samsung">Post</NavLink>
					</li>
					<li>
						<NavLink to="/error">Error</NavLink>
					</li>
				</ul>
			</div>
			<Outlet></Outlet>
		</>
	);
};

export default NavBar;
