import { Router } from "express";
import BeerTypeController from "../controller/beerType.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(BeerTypeController.createBeerType));
router.get("/", asyncHandler(BeerTypeController.getAllBeerTypes));
router.get("/:id", asyncHandler(BeerTypeController.getBeerTypeById));
router.delete("/:id", asyncHandler(BeerTypeController.deleteBeerType));
  
export default router;
