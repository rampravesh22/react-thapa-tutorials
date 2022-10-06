import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Post from "./Post"
import Layout from "./Layout";
import Details from "./Details";
function App() {
	return (
		<>
			{/* <Layout></Layout> */}
			<div className="routes">
				<Routes>
					<Route path="/" element={<Layout></Layout>}>
						<Route path="about" element={<About></About>}></Route>
						<Route path="contact" element={<Contact></Contact>}></Route>
						<Route path="post" element={<Post></Post>}>
							<Route path=":details" element={<Details></Details>}></Route>
						</Route>
						<Route index element={<Home></Home>}></Route>
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
