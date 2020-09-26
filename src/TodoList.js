import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React, { useEffect, useState } from "react";

import Todo from "./Todo";
import "./TodoList.css";
var max = 0;

const TodoList = ({ initValue: initState }) => {
	// console.log(initValue.state);
	// console.log(JSON.stringify(initState.state));
	const quotes = [
		"Learn all the rules, So you can break them like an Artist.",
		"Use the talents you possess, for the woods would be very silent if no birds sang except the best.",
		"It's about damn time",
		"Dream as if you'll live forever, Live as if you'll die today.",
		"If you decide to compete, you are probably gonna lose.",
		"The man above won't put you in a situation that you can handle. Instead of saying 'Why me?', I said 'This is what he wanted me to do!'.",
	];
	const [todos, setTodos] = useState(initState.state);
	const [pending, setPending] = useState(todos.length);
	const [quote, setQuote] = useState(quotes[0]);

	window.t = todos;
	useEffect(() => {
		if (todos.length === 0) {
			document.querySelector(".survey").style.display = "none";
		} else if (todos.length > 0) {
			document.querySelector(".survey").style.display = "inline-block";
		}
		setQuote(quotes[pending % quotes.length]);
	}, [pending, todos.length]);

	const addTodo = () => {
		max += 1;
		var input = prompt("Enter the new work");
		if (input) {
			setTodos((old) => [
				...old,
				{
					id: max,
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
		/* everytime the todo list changes, update it in the local storage as json data */
		localStorage.myTodos = JSON.stringify(todos);
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
