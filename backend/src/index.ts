import express from "express";
import { Server, Socket } from "socket.io";
import http from "http";
import { createRouter } from "./router";

const expressPort = process.env.PORT || 4000;
const app: express.Express = express();

const httpServer: http.Server = http.createServer(app);
const io = new Server(httpServer);

app.use("/", createRouter());

httpServer.listen(expressPort, () => {
	console.log(`Server Start on Port ${expressPort}`);
});

io.on("connection", (socket: Socket) => {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});
