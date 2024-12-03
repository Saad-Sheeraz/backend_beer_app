import { Request, Response } from "express";
import {
  addBeer,
  getAllBeers,
  searchBeersByName,
  updateBeerRating,
} from "../services/beerServices";

export const createBeer = async (req: Request, res: Response) => {
  const { name, type, rating } = req.body;
  console.log("reached here", name, type, rating);
  try {
    const newBeer = await addBeer(name, type, rating);
    res.status(201).json(newBeer);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    res.status(500).json({ message: error });
  }
};

export const listAllBeers = async (req: Request, res: Response) => {
  try {
    const beers = await getAllBeers();
    res.status(200).json(beers);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    res.status(500).json({ message: error });
  }
};

export const searchBeers = async (req: Request, res: Response) => {
  const { searchTerm } = req.query;
  try {
    const beers = await searchBeersByName(searchTerm as string);
    res.status(200).json(beers);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    res.status(500).json({ message: error });
  }
};

export const rateBeer = async (req: Request, res: Response) => {
  const { beerId, rating } = req.body;
  try {
    const averageRating = await updateBeerRating(beerId, rating);
    res.status(200).json({ averageRating });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    res.status(500).json({ message: error });
  }
};
