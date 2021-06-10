import { Router, Request, Response } from "express";

export const createRouter = (): Router => {
	const router: Router = Router();

	router.get("/", (req: Request, res: Response) => {
		res.status(200).send({ responce: 200 });
	});

	return router;
};
