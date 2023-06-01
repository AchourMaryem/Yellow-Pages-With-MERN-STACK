
import express from "express";


import { createTravel, deleteTravel, getAllTravel, getSingleTravel, getTravelBySearch, getTravelcount, updateTravel } from "../controllers/travelagencieController.js";




const router = express.Router();

//create new travelagencie

router.post("/", createTravel);

//update travelagencie

router.put("/:id", updateTravel);

//delete travelagencie

router.delete("/:id",  deleteTravel);

//get single travelagencie

router.get("/:id", getSingleTravel);

//get all travelagencies

router.get("/", getAllTravel);

//get travelagencie by search

router.get("/search/getTravelAgencieBySearch",getTravelBySearch)

//router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getTravelAgenciecount",getTravelcount)



export default router;
