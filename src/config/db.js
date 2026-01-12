import "dotenv/config";
import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;
const NODE_ENV = process.env.NODE_ENV;

if (!DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.<development/production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode...`);
  } catch (error) {
    console.log("Error connecting to database: ", error);
    process.exit(1);
  }
};

export default connectToDatabase;
