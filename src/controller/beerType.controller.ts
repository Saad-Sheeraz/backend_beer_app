import { Request, Response } from "express";
import BeerTypeService from "../services/beerTypes.service";

class BeerTypeController {
  async createBeerType(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const beerType = await BeerTypeService.createBeerType(name);
      return res.status(201).json(beerType);
    } catch (error) {
      return res.status(400).json({ message: "Error creating BeerType", error });
    }
  }

  async getAllBeerTypes(req: Request, res: Response) {
    const beerTypes = await BeerTypeService.getAllBeerTypes();
    return res.status(200).json(beerTypes);
  }

  async getBeerTypeById(req: Request, res: Response) {
    const { id } = req.params;
    const beerType = await BeerTypeService.getBeerTypeById(id);
    if (!beerType) return res.status(404).json({ message: "BeerType not found" });
    return res.status(200).json(beerType);
  }

  async deleteBeerType(req: Request, res: Response) {
    const { id } = req.params;
    await BeerTypeService.deleteBeerType(id);
    return res.status(204).send();
  }
}

export default new BeerTypeController();
