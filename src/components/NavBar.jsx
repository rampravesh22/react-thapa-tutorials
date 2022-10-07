import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
	return (
		<>
			<div className="container-fluid nav_bg">
				<div className="row">
					<div className="col-10 mx-auto">
						<nav className="navbar navbar-expand-lg bg-light">
							<div className="container-fluid">
								<a className="navbar-brand" href="#">
									MyWeb
								</a>
								<button
									className="navbar-toggler text-dark"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon"></span>
								</button>
								<div
									className="collapse navbar-collapse"
									id="navbarSupportedContent"
								>
									<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
										<li className="nav-item">
											<NavLink
												className={({ isActive }) => {
													return isActive
														? "nav-link activate"
														: "nav-link";
												}}
												// aria-current="page"
												to="/"
											>
												Home
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={({ isActive }) => {
													return isActive
														? "nav-link activate"
														: "nav-link";
												}}
												to="/service"
											>
												Service
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={({ isActive }) => {
													return isActive
														? "nav-link jjjj activate"
														: "nav-link";
												}}
												to="/about"
											>
												About
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={({ isActive }) => {
													return isActive
														? "nav-link activate"
														: "nav-link";
												}}
												to="/contact"
											>
												Contact
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
