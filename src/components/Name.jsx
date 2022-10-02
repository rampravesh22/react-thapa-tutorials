import React from "react";
import { useParams } from "react-router-dom";

const Name = () => {
   const {name} = useParams()
	return <div>Hello {name}</div>;
};

export default Name;
