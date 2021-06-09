import express from "express";

const expressPort = process.env.PORT || 4000;
const app: express.Express = express();

app.use("/", (req: express.Request, res: express.Response) => {
	res.status(200).send("hello world");
});

app.listen(expressPort, () => {
	console.log(`Server Start on Port ${expressPort}`);
});
