import React from "react";
import { createContext } from "react";
import ComponentA from "./ComponentA";

const FirstName = createContext();
const LastName = createContext();
function App() {
	return (
		<>
			<FirstName.Provider value={"node"}>
				<LastName.Provider value={"python"}>
					<ComponentA></ComponentA>
				</LastName.Provider>
			</FirstName.Provider>
		</>
	);
}

export default App;
export { FirstName, LastName };
