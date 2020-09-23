import React, { useState } from "react";
import "./Todo.css";
import { Button } from "@material-ui/core";

const Todo = (props) => {
	const [done, setDone] = useState(props.done);
	const toggleDone = () => {
		setDone((status) => !status);
		props.setTodos((prevState) =>
			prevState.map((todo) => {
				if (todo.work === props.work) {
					console.log(todo);
					todo.done = !todo.done;
				}
				return todo;
			})
		);
	};
	const orangeBorder = { border: "3px solid orangered" };
	const greenBorder = { border: "3px solid green" };
	return (
		<div className="todo" style={done ? greenBorder : orangeBorder}>
			<div className="todo__work">{props.work}</div>
			<div className="todo__done">
				{done ? "Done and dusted" : "Yet to be Done"}
			</div>
			<Button
				onClick={toggleDone}
				color="primary"
				variant="contained"
				className="todo__toggle"
			>
				Toggle
			</Button>
			<Button
				onClick={(e) => {
					props.setTodos((prevState) => {
						prevState.forEach((todo, index) => {
							if (todo.work === props.work) {
								prevState.splice(index, 1);
								console.log(prevState);
							}
						});
						toggleDone();
						return prevState;
					});
				}}
				color="secondary"
				variant="contained"
				className="todo__toggle"
			>
				Delete
			</Button>
		</div>
	);
};

export default Todo;
