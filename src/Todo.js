import React, { useState } from "react";
import "./Todo.css";
import { Button } from "@material-ui/core";

const Todo = (props) => {
	const [done, setDone] = useState(props.done);
	const toggleDone = () => {
		setDone((status) => !status);
		props.setTodos((prevState) =>
			prevState.map((todo) => {
				if (todo.id === props.id) {
					console.log(todo);
					todo.done = !todo.done;
				}
				return todo;
			})
		);
	};
	const greenBorder = { backgroundColor: "#acffac" };
	const orangeBorder = { backgroundColor: "#ffacac" };
	return (
		<div className="todo" style={done ? greenBorder : orangeBorder}>
			<div className="todo__work">{props.work}</div>
			<div className="todo__done">
				{done ? "Done and dusted" : "Yet to be Done"}
			</div>
			<Button
				onClick={toggleDone}
				color="primary"
				variant={done ? "contained" : "outlined"}
				className="todo__toggle"
			>
				{done ? "Completed" : "Incomplete"}
			</Button>
			<Button
				onClick={(e) => {
					props.setTodos((prevState) => {
						console.log(props.id);
						prevState = prevState.filter((todo) => todo.id !== props.id);
						console.log("new-state", prevState);
						// toggleDone();
						return prevState;
					});
				}}
				color="secondary"
				variant="contained"
				className="todo__delete"
			>
				Delete
			</Button>
		</div>
	);
};

export default Todo;
