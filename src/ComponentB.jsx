import React from "react";
// import ComponentC from "./ComponentC";
import { FirstName, LastName } from "./App";
import { useContext } from "react";

const ComponentB = () => {
   const fname =useContext(FirstName);
   const lname =useContext(LastName);
	return (
		<>
			<h1>{fname}</h1>
			<h1>{lname}</h1>
		</>
	);
};

export default ComponentB;
