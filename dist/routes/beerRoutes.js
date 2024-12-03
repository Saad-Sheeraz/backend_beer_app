"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const beerController_1 = require("../controller/beerController");
const router = express_1.default.Router();
router.post("/beers", beerController_1.createBeer);
router.get("/beers", beerController_1.listAllBeers);
router.get("/beers/search", beerController_1.searchBeers);
router.put("/beers/rate", beerController_1.rateBeer);
exports.default = router;
