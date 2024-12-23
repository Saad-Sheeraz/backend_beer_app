import { Request, Response } from "express";
import authorServices from "../services/author.services";

class AuthorController {
  async createAuthor(req: Request, res: Response) {
    try {
      console.log("body", req.body);
      const { authorName, authorPhone } = req.body;
      const saveAuthors = await authorServices.createAuthor(
        authorName,
        authorPhone
      );
      return res.status(201).json({ message: "data saved", data: saveAuthors });
    } catch (error) {
      console.log("error:", error);
      return res.status(500).json(error);
    }
  }
}

export default new AuthorController();
