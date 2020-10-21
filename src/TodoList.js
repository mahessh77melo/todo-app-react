import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React, { useEffect, useState } from "react";

import Todo from "./Todo";
import { expQuotes } from "./state";
import "./TodoList.scss";
import useLogger from "./useLogger";
import useLocalStorage from "./useLocalStorage";
var max = 0;

const TodoList = ({ initValue: initState }) => {
	// console.log(initValue.state);
	// console.log(JSON.stringify(initState.state));
	console.log("🔥,👑");
	const quotes = expQuotes;
	const [todos, setTodos] = useLocalStorage("myTodos");
	const [pending, setPending] = useState(todos.length);
	const [quote, setQuote] = useState(quotes[0]);
	useLogger(todos, "myTodos");

	window.t = todos;
	useEffect(() => {
		if (todos.length === 0) {
			document.querySelector(".survey").style.display = "none";
		} else if (todos.length > 0) {
			document.querySelector(".survey").style.display = "inline-block";
		}
		setQuote(quotes[pending % quotes.length]);
	}, [pending, todos.length, quotes]);

	const addTodo = () => {
		todos.forEach((todo) => {
			if (todo.id > max) max = todo.id;
		});
		var input = prompt("Enter the new work");
		if (input) {
			setTodos((old) => [
				...old,
				{
					id: max + 1,
					work: input,
					done: false,
				},
			]);
		}
		console.log(todos);
	};

	useEffect(() => {
		var doneArray = 0;
		doneArray = todos.map((task) => (task.done ? 0 : 1));
		var number = doneArray.reduce((a, b) => a + b, 0);
		setPending(number);
		// console.log(number);
	}, [todos]);

	return (
		<div className="todo-wrap">
			<div className="todo-list">
				{" "}
				<IconButton onClick={addTodo}>
					<AddCircleIcon />
				</IconButton>{" "}
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						setTodos={setTodos}
						work={todo.work}
						done={todo.done}
						id={todo.id}
					/>
				))}
			</div>

			<div className="survey">
				{todos.length > 0 ? (
					<>
						<h2>
							{pending
								? `Number of tasks remaining : ${pending}`
								: "You are prolly done for the day"}
						</h2>
						<br />
						<h2>{`Finished tasks for today : ${todos.length - pending}`}</h2>
					</>
				) : (
					""
				)}
			</div>
			<p className="quote">{`"${quote}"`}</p>
		</div>
	);
};

export default TodoList;
