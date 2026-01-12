import app from "./src/app.js";
import connectToDatabase from "#config/db.js";

const PORT = process.env.port || 3000;

app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);

  await connectToDatabase();
});
