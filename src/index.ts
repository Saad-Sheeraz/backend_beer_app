import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./utils/database";
import beerRoutes from "./routes/beerRoutes";

dotenv.config();

// const app = express();
const app: Express = express();
app.use(cors());
app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.use("/api", beerRoutes);

const port = process.env.PORT ||5000;



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
