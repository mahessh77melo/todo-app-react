import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React, { useEffect, useState } from "react";

import Todo from "./Todo";
import "./TodoList.css";
var max = 0;

const TodoList = ({ initValue: initState }) => {
	// console.log(initValue.state);
	// console.log(JSON.stringify(initState.state));
	const [todos, setTodos] = useState(initState.state);
	const [pending, setPending] = useState(todos.length);

	window.t = todos;

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
		console.log(number);
	}, [todos]);

	return (
		<>
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
					/>
				))}
			</div>
			<div className="survey">
				<h2>
					{pending
						? `Number of tasks remaining : ${pending}`
						: "You are prolly done for the day"}
				</h2>
				<br />
				<h2>{`Finished tasks for today : ${todos.length - pending}`}</h2>
			</div>
		</>
	);
};

export default TodoList;
