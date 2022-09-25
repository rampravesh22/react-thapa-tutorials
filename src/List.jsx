import React from "react";

const List = (props) => {
	return (
		<li>
			{props.text}
			<button className="delete-btn" onClick={() => {
            props.onSelect(props.id)
         }}>
				x
			</button>
		</li>
	);
};

export default List;
