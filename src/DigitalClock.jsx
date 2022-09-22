import React, { useState } from "react";

const DigitalClock = () => {
	let time = new Date().toLocaleTimeString();
	const [current, setCurrent] = useState(time);
	const updateTime = () => {
		let time = new Date().toLocaleTimeString();
		setCurrent(time);
	};
	setInterval(updateTime, 1000);

	return (
		<>
			<div className="clock">
				<h1>{current}</h1>
				<span></span>
				<span></span>
			</div>
		</>
	);
};

export default DigitalClock;
