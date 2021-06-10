import express from "express";
import socketIo from "socket.io";
import { createRouter } from "./router";

const expressPort = process.env.PORT || 4000;
const app: express.Express = express();

app.use("/", createRouter());

app.listen(expressPort, () => {
	console.log(`Server Start on Port ${expressPort}`);
});
