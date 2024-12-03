
import Beer from "../models/beer";

export const addBeer = async (name: string, type: string, rating?: number) => {
  const newBeer = new Beer({ name, type });
  console.log("in the process of saving data")
  if (rating) {
  newBeer.addRating(rating);
  }
  console.log("rating added")
  await newBeer.save();
  console.log("data saved")
  return newBeer;
};

export const getAllBeers = async () => {
  return await Beer.find();
};

export const searchBeersByName = async (searchTerm: string) => {
  return await Beer.find({ name: { $regex: searchTerm, $options: "i" } });
};

export const updateBeerRating = async (id: string, rating: number) => {
  const beer = await Beer.findById(id);
  if (!beer) throw new Error("Beer not found");
  const averageRating = beer.addRating(rating);
  await beer.save();
  return averageRating;
};
