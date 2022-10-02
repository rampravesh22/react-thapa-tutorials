import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<div className="nav_bar">
				<ul>
					<li>
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#000" : "",
								};
							}}
							to="/home"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#000" : "",
								};
							}}
							to="/about"
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#000" : "",
								};
							}}
							to="/contact"
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#000" : "",
								};
							}}
							to="/login"
						>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#000" : "",
								};
							}}
							to="/logout"
						>
							Logout
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavBar;
