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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBeerRating = exports.searchBeersByName = exports.getAllBeers = exports.addBeer = void 0;
const beer_1 = __importDefault(require("../models/beer"));
const addBeer = (name, type, rating) => __awaiter(void 0, void 0, void 0, function* () {
    const newBeer = new beer_1.default({ name, type });
    if (rating) {
        newBeer.addRating(rating);
    }
    yield newBeer.save();
    return newBeer;
});
exports.addBeer = addBeer;
const getAllBeers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield beer_1.default.find();
});
exports.getAllBeers = getAllBeers;
const searchBeersByName = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    return yield beer_1.default.find({ name: { $regex: searchTerm, $options: "i" } });
});
exports.searchBeersByName = searchBeersByName;
const updateBeerRating = (id, rating) => __awaiter(void 0, void 0, void 0, function* () {
    const beer = yield beer_1.default.findById(id);
    if (!beer)
        throw new Error("Beer not found");
    const averageRating = beer.addRating(rating);
    yield beer.save();
    return averageRating;
});
exports.updateBeerRating = updateBeerRating;
