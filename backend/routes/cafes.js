
import express from "express";


import { createCafe, deleteCafe, getAllCafe, getCafeBySearch, getCafecount, getSingleCafe, updateCafe } from "../controllers/cafeController.js";




const router = express.Router();

//create new cafe

router.post("/",  createCafe);

//update cafe

router.put("/:id",  updateCafe);

//delete cafe

router.delete("/:id",  deleteCafe);

//get single cafe

router.get("/:id", getSingleCafe);

//get all cafes

router.get("/", getAllCafe);

//get cafe by search

router.get("/search/getCafeBySearch",getCafeBySearch)

//router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getCafecount",getCafecount)



export default router;
