import mongoose, { Schema, Document, Types } from "mongoose";
// import { Books } from "./books";

interface IAuthor extends Document {
  authorName: string;
  authorPhone: string;
  // authorBooks: Types.ObjectId;
}

const authorSchema = new Schema({
  authorName: { type: String, required: true },
  authorPhone: { type: String, required: true },
  //   authorBooks: {
  //     type: Schema.Types.ObjectId,
  //     ref: Books.modelName,
  //     required: true,
  //   },

  //commented above because it causes circular dependency so using lazy loading below:
  // authorBooks: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Books",
  //   required: true,
  // },
});

const Authors = mongoose.model<IAuthor>("Author", authorSchema);

export { Authors, IAuthor };
