import { Request, Response } from "express";
import booksServices from "../services/books.services";

class BooksContoller {
  async createBooks(req: Request, res: Response) {
    try {
      const { bookName, bookPrice, publication, bookAuthor } = req.body;
      console.log("calling createBooks ");
      const savedBooks = await booksServices.createBooks(
        bookName,
        bookPrice,
        publication,
        bookAuthor
      );
      return res.status(201).json({ message: "books saved", data: savedBooks });
    } catch (error) {
      return res.status(201).json({ error });
    }
  }

  async getBooks(req: Request, res: Response) {
    try {
      return res
        .status(201)
        .json({ message: "done", data: await booksServices.getBooks() });
    } catch (error) {
      return res.status(201).json({ error });
    }
  }
}

export default new BooksContoller();
