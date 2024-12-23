import { Request, Response } from "express";
import BeerService from "../services/beer.services";

class BeerController {
  async createBeer(req: Request, res: Response) {
    try {
      console.log("reqbody", req.body);
      const { name, type, ratings } = req.body;
      const beer = await BeerService.createBeer(name, type, ratings);
      return res.status(201).json(beer);
    } catch (error) {
      return res.status(400).json({ message: "Error creating Beer", error });
    }
  }

  async getAllBeers(req: Request, res: Response) {
    const beers = await BeerService.getAllBeers();
    return res.status(200).json(beers);
  }

  async getBeerById(req: Request, res: Response) {
    const { id } = req.params;
    const beer = await BeerService.getBeerById(id);
    if (!beer) return res.status(404).json({ message: "Beer not found" });
    return res.status(200).json(beer);
  }

  async addRating(req: Request, res: Response) {
    const { id } = req.params;
    const { rating } = req.body;
    const avg = await BeerService.addRating(id, rating);
    if (avg === null)
      return res.status(404).json({ message: "Beer not found" });
    return res.status(200).json({ averageRating: avg });
  }

  async deleteBeer(req: Request, res: Response) {
    const { id } = req.params;
    await BeerService.deleteBeer(id);
    return res.status(204).send();
  }
}

export default new BeerController();
