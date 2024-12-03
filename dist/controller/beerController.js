"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateBeer = exports.searchBeers = exports.listAllBeers = exports.createBeer = void 0;
const beerServices_1 = require("../services/beerServices");
const createBeer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, type, rating } = req.body;
    try {
        const newBeer = yield (0, beerServices_1.addBeer)(name, type, rating);
        res.status(201).json(newBeer);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createBeer = createBeer;
const listAllBeers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beers = yield (0, beerServices_1.getAllBeers)();
        res.status(200).json(beers);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.listAllBeers = listAllBeers;
const searchBeers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    try {
        const beers = yield (0, beerServices_1.searchBeersByName)(searchTerm);
        res.status(200).json(beers);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.searchBeers = searchBeers;
const rateBeer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { beerId, rating } = req.body;
    try {
        const averageRating = yield (0, beerServices_1.updateBeerRating)(beerId, rating);
        res.status(200).json({ averageRating });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.rateBeer = rateBeer;
