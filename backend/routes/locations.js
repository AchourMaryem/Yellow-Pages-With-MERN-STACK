
import express from "express";

import { createLocation, deleteLocation, getAllLocation, getLocationBySearch, getLocationcount, getRecommendedLocation, getSingleLocation, updateLocation } from "../controllers/locationController.js";


const router = express.Router();

//create new location

router.post("/",  createLocation);

//update location

router.put("/:id",  updateLocation);

//delete location

router.delete("/:id",  deleteLocation);

//get single location

router.get("/:id", getSingleLocation);

//get all locations

router.get("/", getAllLocation);

//get location by search

router.get("/search/getLocationBySearch",getLocationBySearch)

router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getLocationcount",getLocationcount)



export default router;
