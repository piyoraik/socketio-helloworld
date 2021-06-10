import { useState } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:4000";

function App() {
	const [socket, setSocket] = useState();
	const [name, setName] = useState("");
	const [inputMessage, setInputMessage] = useState("");

	function socketSetName() {
		const socket = socketIOClient(ENDPOINT);
		if (socket !== undefined) {
			socket.emit("set_name", name);
		}
		setSocket(socket);
	}

	function addMessage() {
		if (socket !== undefined) {
			console.log(inputMessage);
			socket.emit("chat message c2s", inputMessage);
		}
	}

	return (
		<div className="App">
			<input
				id="m1"
				autoComplete="off"
				placeholder="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={socketSetName}>submit</button>

			<input
				id="m2"
				autoComplete="off"
				placeholder="message"
				onChange={(e) => setInputMessage(e.target.value)}
			/>
			<button onClick={addMessage}>submit</button>
		</div>
	);
}

export default App;
