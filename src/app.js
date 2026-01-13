import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  console.log("Hello from echo note app");
  res.json({ message: "Hello from the server..." });
});

export default app;
