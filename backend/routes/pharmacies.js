
import express from "express";


import { createPharmacie, deletePharmacie, getAllPharmacie, getPharmacieBySearch, getPharmaciecount, getSinglePharmacie, updatePharmacie } from "../controllers/pharmacieController.js";


const router = express.Router();

//create new pharmacie

router.post("/",  createPharmacie);

//update pharmacie

router.put("/:id",  updatePharmacie);

//delete pharmacie

router.delete("/:id", deletePharmacie);

//get single pharmacie

router.get("/:id", getSinglePharmacie);

//get all pharmacies

router.get("/", getAllPharmacie);

//get pharmacie by search

router.get("/search/getPharmacieBySearch",getPharmacieBySearch)

//router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getPharmaciecount",getPharmaciecount)



export default router;
