import { Router } from "express";
import AuthorController from "../controller/author.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/doit", asyncHandler(AuthorController.createAuthor));

export default router;
