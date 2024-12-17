import mongoose, { Schema, Document, Types } from "mongoose";
import { BeerType } from "./beerType"; // Adjust the path as needed

interface IBeer extends Document {
  name: string;
  type: Types.ObjectId; // Reference to BeerType
  ratings: number[];
  addRating(rating: number): number;
}

const beerSchema = new Schema({
  name: { type: String, required: true },
  type: {
    type: Schema.Types.ObjectId,
    ref: BeerType.modelName,
    required: true,
  }, // Use BeerType reference
  ratings: { type: [Number], default: [] },
});

// Add a method for adding ratings
beerSchema.methods.addRating = async function (rating: number) {
  this.ratings.push(rating);
  console.log("rating:", rating);
  const total = this.ratings.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
  return total / this.ratings.length;
};

const Beer = mongoose.model<IBeer>("Beer", beerSchema);

export { Beer, IBeer };
