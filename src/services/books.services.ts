import { Books, IBooks } from "../models/books";
import { Authors } from "../models/author";

interface BookWithAuthor {
  bookName: string;
  bookPrice: string;
  publication: Date;
  authorDetails: {
    authorName: string;
    authorPhone: string;
  };
}
class BookService {
  async createBooks(
    bookName: string,
    bookPrice: string,
    publication: Date,
    bookAuthor: string
  ): Promise<IBooks> {
    const author = await Authors.findOne({ authorName: bookAuthor });
    console.log("flag 2", author);
    if (!author) {
      throw new Error("no author found");
    }

    const books = new Books({
      bookName,
      bookPrice,
      publication,
      bookAuthor: author._id,
    });
    return await books.save();
  }

  async getBooks(): Promise<BookWithAuthor[]> {
    const books = await Books.aggregate([
      {
        $lookup: {
          from: "authors",
          localField: "bookAuthor",
          foreignField: "_id",
          as: "authorDetails",
        },
      },
      {
        $unwind: "$authorDetails",
      },
      {
        $project: {
          bookName: 1,
          bookPrice: 1,
          publication: 1,
          "authorDetails.authorName": 1,
          "authorDetails.authorPhone": 1,
        },
      },
    ]);
    console.log("data", books);
    return books;
  }
}

export default new BookService();
