import React from "react";
import { useParams, redirect } from "react-router-dom";

const Details = () => {
	const { params } = useParams();
   return(
      <>
         <h1>details {params}</h1>
      </>
   )
};

export default Details;
