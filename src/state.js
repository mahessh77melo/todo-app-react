import React from "react";
// getting the local json file to load the data.
var data = require("./todos.json");

/* checking if there is any local storage., else load the default data */
console.log(localStorage.myTodos);
export const state = localStorage.length
	? JSON.parse(localStorage.myTodos)
	: data;
export const MyContext = React.createContext(state);
