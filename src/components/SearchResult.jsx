import React from "react";

const SearchResult = (props) => {
	const img = `https://source.unsplash.com/600x400/?${props.name}`;
	return <div className="search_result">
      <img src={img} alt="random_image" />
   </div>;
};

export default SearchResult;
