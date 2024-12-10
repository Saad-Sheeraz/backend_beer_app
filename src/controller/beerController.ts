import { Request, Response } from "express";
import {
  addBeer,
  getAllBeers,
  searchBeersByName,
  updateBeerRating,
  get3Beers,
  searchByCat,
  updateBeerType,
} from "../services/beerServices";
import { searchMovies } from "../api/movies.api";

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

export const listAllMovies = async (req: Request, res: Response) => {
  try {
    const dataset = await searchMovies("Hitman");
    res.status(200).json(dataset);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const list3Beers = async (req: Request, res: Response) => {
  try {
    console.log("flag 1");
    const _3beers = await get3Beers();
    res.status(200).json(_3beers);
  } catch (error) {
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

export const searchByCategory = async (req: Request, res: Response) => {
  const { category } = req.query;
  console.log("category in controller", category);
  try {
    const beers = await searchByCat(category as string);
    res.status(200).json(beers);
  } catch (error) {
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

export const updateBeer = async (req: Request, res: Response) => {
  const { id, type } = req.body;
  console.log("id", id, "  ", "type", type);
  try {
    const updateType = updateBeerType(id, type);
    res.status(200).json(updateType);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
