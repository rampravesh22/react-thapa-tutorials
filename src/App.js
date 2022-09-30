import React from "react";
import { useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
function App() {
	const [note, setNote] = useState([]);
	const addNote = (inputNote) => {
		setNote((pre) => {
			return [...pre, inputNote];
		});
	};

	const deleteNote = (id) => {
		console.log("heool");
		setNote((pre) => {
			return pre.filter((value, index) => {
				return index !== id;
			});
		});
	};

	return (
		<>
			{/* Componenents */}
			<AddNote propsAddNote={addNote}></AddNote>
			<div className="note">
				{note.map((value, index) => {
					return (
						<Note
							key={index}
							name={value.name}
							age={value.age}
							id={index}
							propsDelete={deleteNote}
						></Note>
					);
				})}
			</div>
		</>
	);
}

export default App;
