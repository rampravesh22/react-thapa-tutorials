import React, { useState } from "react";
import SearchResult from "./SearchResult";
const Search = () => {
	const [input, setInput] = useState("");
	const inputEvent = (e) => {
		const value  = e.target.value;
		setInput(value);
	};
	return (
		<>
			<div className="search_container">
				<div className="search">
					<input
						type="text"
						placeholder="search here..."
						onChange={inputEvent}
						value={input}
					/>
				</div>
				{input === "" ? null : <SearchResult name={input}></SearchResult>}
			</div>
		</>
	);
};
export default Search;
