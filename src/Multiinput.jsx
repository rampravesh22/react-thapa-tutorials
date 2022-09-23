import React, { useState } from "react";

const Multiinput = () => {
	const [fullName, setFullName] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
	});

	const inputEvent = (e) => {
		const { name, value } = e.target;
		setFullName((preValue) => {
			console.log(preValue);
			return {
				...preValue,
				[name]: value,
			};
		});
	};

	const submitForm = (e) => {
		console.log(fullName);
		e.preventDefault();
	};

	return (
		<div className="container">
			<h1>
				Hello {fullName.fname} {fullName.lname}
			</h1>
			<form action="/" method="post" onSubmit={submitForm}>
				<div className="form-input">
					<input
						type="text"
						name="fname"
						id=""
						placeholder="Enter your name"
						onChange={inputEvent}
						value={fullName.fname}
					/>
				</div>
				<div className="form-input">
					<input
						type="text"
						name="lname"
						id=""
						placeholder="Enter last name"
						onChange={inputEvent}
						value={fullName.lname}
					/>
				</div>
				<div className="form-input">
					<input
						type="email"
						name="email"
						id=""
						placeholder="Enter your email"
						onChange={inputEvent}
						value={fullName.email}
					/>
				</div>
				<div className="form-input">
					<input
						type="text"
						name="phone"
						id=""
						placeholder="Enter your phone"
						onChange={inputEvent}
						value={fullName.phone}
					/>
				</div>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};
export default Multiinput;
