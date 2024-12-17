import mongoose, { Schema, Document } from "mongoose";

interface IBeerType extends Document {
  name: string;
}

const BeerTypeSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const BeerType = mongoose.model<IBeerType>("BeerType", BeerTypeSchema);

export { IBeerType, BeerType };
