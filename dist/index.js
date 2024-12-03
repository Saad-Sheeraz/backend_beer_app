"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./utils/database");
const beerRoutes_1 = __importDefault(require("./routes/beerRoutes"));
dotenv_1.default.config();
// const app = express();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, database_1.connectToDatabase)();
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use("/api", beerRoutes_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
