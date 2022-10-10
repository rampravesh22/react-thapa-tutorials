import React from "react";
import { NavLink } from "react-router-dom";

import web from "../images/death.jpg";
const Home = () => {
	return (
		<>
			<section id="header" className="d-flex align-items-center">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row">
								<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
									<h1>
										Grow Your business with
										<strong className="text-primary">
											MyWeb
										</strong>
									</h1>
									<h2 className="my-3">
										We are the team of talented developer
										making awesome websites
									</h2>
									<div className="mt-3">
										<NavLink
											to="/home"
											className="btn btn-outline-primary rounded-5"
										>
											Get Started
										</NavLink>
									</div>
									<div className="col-lg-6 order-1 oerder-lg-2 mt-4 rounded-5">
										<img
											src={web}
											alt=""
											className="img-fluid animated"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
