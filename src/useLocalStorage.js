const { useState } = require("react");
var data = require("./todos.json");

const getStored = (key) =>
	localStorage.myTodos ? JSON.parse(localStorage.myTodos) : data;

const useLocalStorage = () => {
	const [key, setKey] = useState(() => getStored());
	return [key, setkey];
};
export default useLocalStorage;
