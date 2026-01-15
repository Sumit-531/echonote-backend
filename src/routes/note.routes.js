import { Router } from "express";

const noteRouter = Router();

noteRouter.post("/", (req, res) => {
  res.send({ title: "Create a note" });
});

export default noteRouter;
