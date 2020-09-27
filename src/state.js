import React from "react";
// getting the local json file to load the data.
var data = require("./todos.json");

/* checking if there is any local storage., else load the default data */
// console.log(localStorage.myTodos);
export const state = localStorage.length
	? JSON.parse(localStorage.myTodos)
	: data;
export const quotes = [
	"Learn all the rules, So you can break them like an Artist.",
	"Use the talents you possess, for the woods would be very silent if no birds sang except the best.",
	"It's about damn time",
	"Dream as if you'll live forever, Live as if you'll die today.",
	"If you decide to compete, you are probably gonna lose.",
	"The man above won't put you in a situation that you can handle. Instead of saying 'Why me?', I said 'This is what he wanted me to do!'.",
	"If we wait for the moment when everything, absolutely everything is ready, we shall never begin.",
];
export const MyContext = React.createContext(state);
