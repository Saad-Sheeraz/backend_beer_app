import { BeerType, IBeerType } from "../models/beerType";

class BeerTypeService {
  async createBeerType(name: string): Promise<IBeerType> {
    const beerType = new BeerType({ name });
    return await beerType.save();
  }

  async getAllBeerTypes(): Promise<IBeerType[]> {
    return await BeerType.find();
  }

  async getBeerTypeById(id: string): Promise<IBeerType | null> {
    return await BeerType.findById(id);
  }

  async deleteBeerType(id: string): Promise<void> {
    await BeerType.findByIdAndDelete(id);
  }
}

export default new BeerTypeService();
