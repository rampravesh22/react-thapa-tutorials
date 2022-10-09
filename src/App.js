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
	},[]);
	console.log(students)
	return (
		<>
			<h1 style={{textAlign:"center",margin:"1rem 0"}}>Connect django with react </h1>

			<div className="container">{students.map((student) => {
				return(
					<>
						<div className="student">
							<h1>Name: {student.name}</h1>
							<h1>Roll: {student.roll}</h1>
							<h1>City: {student.city}</h1>
						</div>
					</>
				)
			})}</div>
		</>
	);
}

export default App;
