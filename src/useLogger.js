const { useEffect } = require("react");
// Custom Hook
const useLogger = (props) => {
	useEffect(() => {
		console.log(props);
		localStorage.mytodos = JSON.stringify(props);
	}, [props]);
};
export default useLogger;
