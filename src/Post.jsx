import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Post = () => {
	const { params } = useParams();
	return (
		<div>
			<h1>Post{params}</h1>
         
			<Outlet></Outlet>
		</div>
	);
};

export default Post;
