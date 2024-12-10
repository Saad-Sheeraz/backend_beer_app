import express from "express";
import {
  createBeer,
  listAllBeers,
  searchBeers,
  rateBeer,
  list3Beers,
  searchByCategory,
  listAllMovies,
  updateBeer,
} from "../controller/beerController";

const router = express.Router();

router.post("/beers", createBeer);
router.get("/beers", listAllBeers);
router.get("/beers/search", searchBeers);
router.put("/beers/rate", rateBeer);
//
router.get("/threebeers", list3Beers);
router.get("/category", searchByCategory);
//Api data
router.get("/moviesdata", listAllMovies);
//update
router.post("/update_type", updateBeer);

export default router;
