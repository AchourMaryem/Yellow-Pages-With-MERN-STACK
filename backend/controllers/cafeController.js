
import Cafe from '../models/Cafe.js';



//create new cafe

export const createCafe = async (req,res) => {

    const newCafe = new Cafe(req.body)

    try {
        const savedCafe = await newCafe.save()

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully created',
            data: savedCafe,
        });
    }   catch (err) {
        res
        .status(500)
        .json({
            success:false,
             message:'Failed to create. Try again'});

    }
};

//update cafe
export const updateCafe = async (req, res) => {
    const id = req.params.id

    try {
        const updatedCafe = await Cafe.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully updated',
            data: updatedCafe,
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

//delete cafe
export const deleteCafe = async (req, res) => {
    const id = req.params.id

    try {
        await Cafe.findByIdAndDelete(id);
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

//getSingle cafe
export const getSingleCafe = async (req, res) => {
    const id = req.params.id

    try {
        const cafe = await Cafe.findById(id);
        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:cafe
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

//getAll cafe
export const getAllCafe = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);

    try {
        const cafes = await Cafe.find({})
        .skip(page * 8)
        .limit(8);

        res.status(200).json({success:true,
        count:cafes.length,
        message:"Successful",
        data: cafes, })
        
    }catch (err) {
        res.status(404).json({
            success:false,
            message: "not found",
        });
    }
};

//get cafe by search
export const getCafeBySearch = async(req,res) => {


    //here 'i' means case sensitive

    const city = new RegExp(req.query.city, 'i')
    const name = new RegExp(req.query.name, 'i')

    try {
        const cafes = await Cafe.find({ city, name})

        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:cafes,
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

//get cafes counts
 export const getCafecount = async(req,res) => {
    try {
        const cafeCount = await Cafe.estimatedDocumentCount();
        res.status(200).json({ success: true, data : cafeCount});
    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch"});
    }
 };



