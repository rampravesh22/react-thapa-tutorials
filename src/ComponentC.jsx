import React from "react";
import { FirstName, LastName } from "./App";

const ComponentC = () => {
	return (
		<div>
			<FirstName.Consumer>
				{(fname) => {
					return (
						<>
							<LastName.Consumer>
								{(lname) => {
									return (
										<>
											<h1>{fname}</h1>
											<h3>{lname}</h3>
										</>
									);
								}}
							</LastName.Consumer>

							<h3>{}</h3>
						</>
					);
				}}
			</FirstName.Consumer>
		</div>
	);
};

export default ComponentC;
