import React from "react";

export const state = [
	{
		id: 234,
		work: "Coursera Course completion",
		done: false,
	},
	{
		id: 235,
		work: "Duolingo 60 XP",
		done: false,
	},
	{
		id: 236,
		work: "React App Initiation",
		done: true,
	},
];
export const MyContext = React.createContext(state);

/* const Family = () => {
	return (
		<MyContext.Consumer>
			{(context) => (
				<div className="div">
					<h1>The name is {context.state.name}</h1>
					<h2>Age: {context.state.age}</h2>
				</div>
			)}
		</MyContext.Consumer>
	);
};

const Person = () => {
	const state = [
		{
			id: 1,
			name: "kamada",
			age: 17,
		},
	];
	return state.map((person) => <Family />);
}; */
// export default Person;
