import React, { useState } from "react";

const LoginForm = () => {
	const [fullName, setFullName] = useState();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const submitForm = (e) => {
		setFullName(`${firstName} ${lastName}`);

		e.preventDefault();
	};
	const inputEvent1 = (e) => {
		setFirstName(e.target.value);
	};

	const inputEvent2 = (e) => {
		setLastName(e.target.value);
	};
	return (
		<>
			<div className="container">
				<h1>Hello {fullName}</h1>
				<form action="/" method="post" onSubmit={submitForm}>
					<div className="form-input">
						<input
							type="text"
							name=""
							id=""
							placeholder="Enter your name"
							onChange={inputEvent1}
							value={firstName}
						/>
					</div>
					<div className="form-input">
						<input
							type="text"
							name=""
							id=""
							placeholder="Enter last name"
							onChange={inputEvent2}
							value={lastName}
						/>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</>
	);
};
export default LoginForm;
