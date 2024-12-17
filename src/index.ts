import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./utils/database";
import beerRoutes from "./routes/beer.routes";
import beerTypeRoutes from "./routes/beerType.routes";
import { AppError, errorHandler } from "../src/middlewares/errorhandling";

dotenv.config();

// const app = express();
const app: Express = express();
app.use(cors());
app.use(errorHandler);
app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/example", (req, res, next) => {
  try {
    const iserror = false;
    if (iserror) {
      throw new AppError("This is a custom error message", 400);
    }
    res.status(200).json({ success: true, message: "All good!" });
  } catch (error) {
    next(error);
  }
});

app.use("/api", beerRoutes);
app.use("/api/beertypes", beerTypeRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
