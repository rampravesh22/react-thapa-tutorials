import React from "react";

const Note = (props) => {
   const deleteItem = ()=>{
      props.propsDelete(props.id)
   }
	return (
		<div className="child">
			<p>
				<span>Name</span>: {props.name}
			</p>
			<p>
				<span>Age</span>: {props.age}
			</p>
			<button className="delete" onClick={deleteItem}>Delete</button>
		</div>
	);
};

export default Note;
