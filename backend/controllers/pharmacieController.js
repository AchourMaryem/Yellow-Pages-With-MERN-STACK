
import Pharmacie from '../models/Pharmacie.js';



//create new pharmacie

export const createPharmacie = async (req,res) => {

    const newPharmacie = new Pharmacie(req.body)

    try {
        const savedPharmacie = await newPharmacie.save()

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully created',
            data: savedPharmacie,
        });
    }   catch (err) {
        res
        .status(500)
        .json({
            success:false,
             message:'Failed to create. Try again'});

    }
};

//update pharmacie
export const updatePharmacie = async (req, res) => {
    const id = req.params.id

    try {
        const updatedPharmacie = await Pharmacie.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully updated',
            data: updatedPharmacie,
        });
        
    }catch (err) {
        res
        .status(500)
        .json({
            success:false,
            message:'Failed to update',
        });
    }
};

//delete pharmacie
export const deletePharmacie = async (req, res) => {
    const id = req.params.id

    try {
        await Pharmacie.findByIdAndDelete(id);
        res
        .status(200)
        .json({
            success:true,
            message:'Successfully deleted',
        });
        
    }catch (err) {
        res
        .status(500)
        .json({
            success:false,
            message:'Failed to delete',
        });
    }
};

//getSingle pharmacie
export const getSinglePharmacie = async (req, res) => {
    const id = req.params.id

    try {
        const pharmacie = await Pharmacie.findById(id);
        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:pharmacie
        });
        
    }catch (err) {
        res
        .status(404)
        .json({
            success:false,
            message:'not found',
        });
    }
};

//getAll pharmacie
export const getAllPharmacie = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);

    try {
        const pharmacies = await Pharmacie.find({})
        .skip(page * 8)
        .limit(8);

        res.status(200).json({success:true,
        count:pharmacies.length,
        message:"Successful",
        data: pharmacies, })
        
    }catch (err) {
        res.status(404).json({
            success:false,
            message: "not found",
        });
    }
};

//get pharmacie by search
export const getPharmacieBySearch = async(req,res) => {


    //here 'i' means case sensitive

    const city = new RegExp(req.query.city, 'i')
    const name = new RegExp(req.query.name, 'i')

    try {
        const pharmacies = await Pharmacie.find({ city, name})

        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:pharmacies,
        });
    } catch (err) {
        res.status(404).json({
            success:false,
            message:"not found",

        });
    }
}

//get recommended location
/*export const getRecommendedLocation = async (req, res) => {

    try {
        const locations = await Location.find({ recommended: true})
        
        res.status(200).json({success:true,
        message:"Successful",
        data:locations, 
    });
        
    }catch (err) {
        res.status(404).json({
            success:false,
            message: "not found",
        });
    }
};*/

//get pharmacies counts
 export const getPharmaciecount = async(req,res) => {
    try {
        const pharmacieCount = await Pharmacie.estimatedDocumentCount();
        res.status(200).json({ success: true, data : pharmacieCount});
    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch"});
    }
 };



