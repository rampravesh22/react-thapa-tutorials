import React from "react";
import { useState } from "react";

const AddNote = (props) => {
	const [input, setInput] = useState({
		name: "",
		age: "",
	});
   console.log();
	const inputEvent = (e) => {
		const {name, value} = e.target;
		setInput((pre) => {
			return { ...pre, [name]: value };
		});
	};
   const addNote = (e)=>{
      e.preventDefault()
      props.propsAddNote(input)
      setInput({
         name:"",
         age:""
      })
      
   }
	return (
		<div className="main_note">
			<form action="">
				<input
					type="text"
					value={input.name}
					placeholder="Enter your name"
					name="name"
					onChange={inputEvent}
				/>
				<input
					value={input.age}
					type="text"
					placeholder="Enter your age"
					name="age"
					onChange={inputEvent}
				/>
				<button className="add" onClick={addNote}>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddNote;
