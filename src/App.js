import React,{useState} from 'react';

function App() {
	let [current, updateCurrent] = useState(0);
	const IncNum = () => {
		updateCurrent(current+1);
	};
	return (
		<>
			<h1 className="heading">{current}</h1>
			<button onClick={IncNum}>Click Me</button>
		</>
	);
}

export default App;
