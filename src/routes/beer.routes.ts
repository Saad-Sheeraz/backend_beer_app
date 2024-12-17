import { Router } from "express";
import BeerController from "../controller/beer.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(BeerController.createBeer));
router.get("/", asyncHandler(BeerController.getAllBeers));
router.get("/:id", asyncHandler(BeerController.getBeerById));
router.put("/:id/rating", asyncHandler(BeerController.addRating));
router.delete("/:id", asyncHandler(BeerController.deleteBeer));

export default router;
