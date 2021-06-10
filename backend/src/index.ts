import express from "express";
import { Server, Socket } from "socket.io";
import http from "http";
import { createRouter } from "./router";

const expressPort = process.env.PORT || 4000;
const app: express.Express = express();

const httpServer: http.Server = http.createServer(app);
const io: Server = new Server(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

app.use("/", createRouter());

httpServer.listen(expressPort, () => {
	console.log(`Server Start on Port ${expressPort}`);
});

io.on("connection", (socket: Socket) => {
	// ユーザーのソケット接続時のイベント
	console.log("a user connected" + socket.id);

	// ユーザーの名前設定時のイベント
	socket.on("set_name", (name) => {
		console.log(`${name}: set his name`);
		// クライアントサイドがメッセージを送信時のイベント
		socket.on("chat message c2s", (msg) => {
			let nameAndMsgAndRoom = `${name}: ${msg} : in clientRoom`;
			console.log(nameAndMsgAndRoom);
			socket.broadcast.emit("broadcast", nameAndMsgAndRoom);
		});
	});

	// ソケット切断時のイベント
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});
