import { Router } from "express";
import BookController from "../controller/books.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(BookController.createBooks));
router.get("/get", asyncHandler(BookController.getBooks));

export default router;
