import React, { useState } from "react";
import { useEffect } from "react";
function App() {
	const [num, setSum] = useState(0);
   useEffect(()=>{
      alert("ckkkk")
   },[num])
	return (
		<>
			{/* Componenents */}
			<h1>{num}</h1>
			<button
				onClick={() => {
					setSum(num + 1);
				}}
			>
				+
			</button>
		</>
	);
}

export default App;
