import { Authors, IAuthor } from "../models/author";

class AuthorService {
  async createAuthor(
    authorName: string,
    authorPhone: string
    // authorBooks: string[] = []
  ): Promise<IAuthor> {
    //logic
    const authors = new Authors({
      authorName,
      authorPhone,
    });

    if (!authors) {
      throw new Error("Unable to save");
    }
    return await authors.save();
  }
}

export default new AuthorService();
