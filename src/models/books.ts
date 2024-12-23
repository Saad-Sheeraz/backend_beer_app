import mongoose, { Schema, Document, Types } from "mongoose";
// import { Authors } from "./author";

interface IBooks extends Document {
  bookName: string;
  bookPrice: string;
  publication: Date;
  bookAuthor: Types.ObjectId;
}

const bookSchema = new Schema({
  bookName: { type: String, required: true },
  bookPrice: { type: String, required: true },
  publication: { type: Date, required: true },
  //   bookAuthor: {
  //     type: Schema.Types.ObjectId,
  //     ref: Authors.modelName,
  //     required: true,
  //   },
  //commented above because it causes circular dependency so using lazy loading below:

  bookAuthor: {
    type: Schema.Types.ObjectId,
    ref: "Authors",
    required: true,
  },
});

const Books = mongoose.model<IBooks>("Books", bookSchema);

export { Books, IBooks };
