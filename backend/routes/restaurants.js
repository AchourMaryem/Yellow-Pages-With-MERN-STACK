
import express from "express";


import { createRestaurant, deleteRestaurant, getAllRestaurant, getRestaurantBySearch, getRestaurantcount, getSingleRestaurant, updateRestaurant } from "../controllers/restaurantController.js";

const router = express.Router();

//create new location

router.post("/",  createRestaurant);

//update location

router.put("/:id",  updateRestaurant);

//delete location

router.delete("/:id",  deleteRestaurant);

//get single location

router.get("/:id", getSingleRestaurant);

//get all locations

router.get("/", getAllRestaurant);

//get location by search

router.get("/search/getRestaurantBySearch",getRestaurantBySearch)

//router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getRestaurantcount",getRestaurantcount)



export default router;
