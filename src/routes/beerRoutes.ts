import express from "express";
import { createBeer, listAllBeers, searchBeers, rateBeer } from "../controller/beerController";

const router = express.Router();

router.post("/beers", createBeer);
router.get("/beers", listAllBeers);
router.get("/beers/search", searchBeers);
router.put("/beers/rate", rateBeer);

export default router;
