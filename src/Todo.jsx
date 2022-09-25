import React, { useState } from "react";
import List from "./List";

const Todo = () => {
	const [input, setInput] = useState("");
	const inputEvent = (e) => {
		setInput(e.target.value);
	};

	const [listItem, setListItem] = useState([]);
	const addListItem = () => {
		if (input) {
			setListItem((preValue) => {
				return [...preValue, input];
			});
			setInput("");
		}
	};

	const deleteItem = (id) => {
		setListItem((preValue) => {
			return preValue.filter((arrElem, index) => {
				console.log(arrElem);
				return index !== id;
			});
		});
	};

	return (
		<>
			<div className="main_div">
				<div className="center_div">
					<br />
					<h1 className="todo-name">Todo List</h1>
					<br />
					<div className="input_div">
						<input
							type="text"
							onChange={inputEvent}
							placeholder="Add a items"
							value={input}
							name="itemname"
						/>
						<button className="add-btn" onClick={addListItem}>
							+
						</button>
					</div>
					<ol className="list">
						{listItem.map((value, index) => {
							return (
								<List
									key={index}
									text={value}
									id={index}
									onSelect={deleteItem}
								></List>
							);
						})}
					</ol>
				</div>
			</div>
		</>
	);
};
export default Todo;
