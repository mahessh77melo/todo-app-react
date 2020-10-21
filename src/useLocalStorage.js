const { useState } = require("react");
var data = require("./todos.json");

const getStored = (prop) =>
	localStorage.getItem(prop) ? JSON.parse(localStorage.getItem(prop)) : data;

const useLocalStorage = (prop) => {
	const [key, setKey] = useState(() => getStored(prop));
	return [key, setKey];
};
export default useLocalStorage;
