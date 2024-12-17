import { Beer, IBeer } from "../models/beer";
import { BeerType } from "../models/beerType";

class BeerService {
  async createBeer(
    name: string,
    type: string,
    ratings: number[] = []
  ): Promise<IBeer> {
    const beerType = await BeerType.findOne({ name: type });
    if (!beerType) {
      throw new Error("Beer type not found");
    }
    const beer = new Beer({
      name,
      type: beerType._id,
      ratings,
    });
    return await beer.save();
    // return await beer.save();
  }

  async getAllBeers(): Promise<IBeer[]> {
    return await Beer.find().populate("type");
  }

  async getBeerById(id: string): Promise<IBeer | null> {
    return await Beer.findById(id).populate("type");
  }

  async addRating(id: string, rating: number): Promise<number | null> {
    const beer = await Beer.findById(id);
    if (!beer) return null;

    const avg = await beer.addRating(rating);
    await beer.save();
    return avg;
  }

  async deleteBeer(id: string): Promise<void> {
    await Beer.findByIdAndDelete(id);
  }
}

export default new BeerService();
