import React from "react";
import { useState } from "react";
import List from "./List";

const Example = () => {
	const [input, setInput] = useState("");
	const inputEvent = (e) => {
		setInput(e.target.value);
	};

	const [list, setList] = useState([]);

	const setListItem = () => {
		setList((preValue) => {
			return [...preValue, input];
		});
		setInput("");
	};
	const deleteList = (e) => {
		setList((preValue) => {
			return preValue.filter((element, index) => {
				return index !== e;
			});
		});
	};
	return (
		<>
			<div className="container">
				<input
					type="text"
					placeholder="Enter your name"
					onChange={inputEvent}
					value={input}
				/>
				<button onClick={setListItem} className="add-btn">
					Add
				</button>
			</div>
			<div className="item-container">
				<ol>
					{list.map((value, index) => {
						return (
							<>
								<List
									key={index}
									text={value}
									idx={index}
									onSelect={deleteList}
								></List>
							</>
						);
					})}
				</ol>
			</div>
		</>
	);
};
export default Example;
