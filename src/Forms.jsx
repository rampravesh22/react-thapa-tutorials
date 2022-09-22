import React, { useState } from "react";

const Forms = () => {
	const [inputCurrent, setInputCurrent] = useState();
	const onInputEvent = (e) => {
		setInputCurrent(e.target.value);
	};
	const [fullName, setFullName] = useState("");
	const onSubmitEvent = () => {
		setFullName(inputCurrent);
	};
	return (
		<>
			<div className="container">
				<h1>Hello {fullName}</h1>
				<input
					type="text"
					name=""
					id=""
					onChange={onInputEvent}
					value={inputCurrent}
					placeholder="Enter your name"
				/>
				<button onClick={onSubmitEvent}>click me</button>
			</div>
		</>
	);
};

export default Forms;
