const List = (props) => {
	return (
		<>
			<div className="list-cotainer">
				<li>{props.text}</li>
				<button
					className="delete-btn"
					onClick={() => {
						return props.onSelect(props.idx);
					}}
				>
					Delete
				</button>
			</div>
		</>
	);
};
export default List;
