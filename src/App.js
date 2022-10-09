import axios from "axios";
import { useState, useEffect } from "react";

function App() {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		const getAllStudent = async () => {
			try {
				const students = await axios.get(
					"http://127.0.0.1:8000/student/"
				);
				// console.log(students.data);
				setStudents(students.data);
			} catch (error) {
				console.log(error);
			}
		};
		getAllStudent();
	});
	return (
		<>
			<h1>Connect django with react </h1>

			<div className="container">{students.map((student) => {
				return(
					<>
						<h1>{student.name}</h1>
					</>
				)
			})}</div>
		</>
	);
}

export default App;
