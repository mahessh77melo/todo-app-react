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
