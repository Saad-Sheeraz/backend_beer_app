import mongoose, { Schema, Document } from "mongoose";

interface IBeer extends Document {
  name: string;
  type: string;
  ratings: number[];
  addRating(rating: number): number;
}

const beerSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  ratings: { type: [Number], default: [] },
});

beerSchema.methods.addRating = async function (rating: number) {
  this.ratings.push(rating);
  console.log("rating :",rating)
  const total = this.ratings.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
  return total / this.ratings.length;
};

const Beer = mongoose.model<IBeer>("Beer", beerSchema);

export default Beer;
