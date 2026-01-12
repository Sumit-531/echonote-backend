import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Hello echo note");
});

export default app;
