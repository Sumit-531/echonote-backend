import express from "express";
import cors from "cors";

import noteRouter from "#routes/note.routes.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//route
app.use("/api/v1/notes/create", noteRouter);

app.get("/api", (req, res) => {
  console.log("Hello from echo note app");
  res.json({ message: "Hello from the server..." });
});

export default app;
