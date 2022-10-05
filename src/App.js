import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
	return (
		<>
			{/* Componenents */}
			<h1 className="text-center bg bg-dark text-white py-3">
				Hello there how are you
			</h1>
			<div className="text-center">
				<button
					className="btn btn-outline-danger fs-5"
					style={{ fontSize: "100px",backgroundColor:"red" }}
				>
					Click
				</button>
			</div>
		</>
	);
}

export default App;
