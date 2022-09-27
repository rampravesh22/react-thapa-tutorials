import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
const Comp = () => {
	const [value, setValue] = useState(0);

	const incValue = () => {
		setValue((preValue) => {
			return preValue + 1;
		});
	};
	const decValue = () => {
		if (value > 0) {
			setValue((preValue) => {
				return preValue - 1;
			});
		}
	};

	return (
		<>
			<div className="container">
				<div className="value">{value}</div>
				<div className="btns">
					<Button onClick={incValue}>Increase</Button>
					<button className="button-2" onClick={decValue}>Decrease</button>
				</div>
			</div>
		</>
	);
};

export default Comp;
