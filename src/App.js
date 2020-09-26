import React, { useContext } from "react";
import "./App.css";
import Header from "./Header";
import { MyContext } from "./state";
import TodoList from "./TodoList";

function App() {
	const initValue = useContext(MyContext);
	// console.log(msg);
	return (
		<div className="app">
			<Header />
			<div className="app__list">
				<TodoList initValue={initValue} />
			</div>
		</div>
	);
}

export default App;
