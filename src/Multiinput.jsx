import React, { useState } from "react";

const Multiinput = () => {
	const [fullName, setFullName] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
	});

	const inputEvent = (e) => {
		// const [value, name] = e.target;
        const {name,value} = e.target;
		setFullName((preValue) => {
			// console.log(preValue);
			if (name === "firstname") {
				return {
					fname: value,
					lname: preValue.lname,
					email: preValue.lname,
					phone: preValue.lname,
				};
			} 
            else if (name === "lastname") {
				return {
					fname: preValue.fname,
					lname: value,
					email: preValue.email,
					phone: preValue.phone,
				};
			} 
            else if (name === "email") {
				return {
					fname: preValue.fname,
					lname: preValue.lname,
					email: value,
					phone: preValue.phone,
				};
			} 
            else if (name === "phone") {
				return {
					fname: preValue.fname,
					lname: preValue.lname,
					email: preValue.email,
					phone: value,
				};
			} 
            
		});
	};

	const submitForm = (e) => {
		console.log(fullName);
        e.preventDefault()
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
						name="firstname"
						id=""
						placeholder="Enter your name"
						onChange={inputEvent}
						value={fullName.fname}
					/>
				</div>
				<div className="form-input">
					<input
						type="text"
						name="lastname"
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
