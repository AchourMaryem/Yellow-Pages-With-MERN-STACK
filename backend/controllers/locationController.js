
import Location from '../models/Location.js'


//create new location

export const createLocation = async (req,res) => {

    const newLocation = new Location(req.body)

    try {
        const savedLocation = await newLocation.save()

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully created',
            data: savedLocation,
        });
    }   catch (err) {
        res
        .status(500)
        .json({
            success:false,
             message:'Failed to create. Try again'});

    }
};

//update location
export const updateLocation = async (req, res) => {
    const id = req.params.id

    try {
        const updatedLocation = await Location.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully updated',
            data: updatedLocation,
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

//delete location
export const deleteLocation = async (req, res) => {
    const id = req.params.id

    try {
        await Location.findByIdAndDelete(id);
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

//getSingle location
export const getSingleLocation = async (req, res) => {
    const id = req.params.id

    try {
        const location = await Location.findById(id);
        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:location
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

//getAll location
export const getAllLocation = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);

    try {
        const locations = await Location.find({})
        .skip(page * 8)
        .limit(8);

        res.status(200).json({success:true,
        count:locations.length,
        message:"Successful",
        data: locations, })
        
    }catch (err) {
        res.status(404).json({
            success:false,
            message: "not found",
        });
    }
};

//get location by search
export const getLocationBySearch = async(req,res) => {


    //here 'i' means case sensitive

    const city = new RegExp(req.query.city, 'i')
    const type = new RegExp(req.query.type, 'i')

    try {
        const locations = await Location.find({ city, type})

        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:locations,
        });
    } catch (err) {
        res.status(404).json({
            success:false,
            message:"not found",

        });
    }
}

//get recommended location
export const getRecommendedLocation = async (req, res) => {

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
};

//get locations counts
 export const getLocationcount = async(req,res) => {
    try {
        const locationCount = await Location.estimatedDocumentCount();
        res.status(200).json({ success: true, data : locationCount});
    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch"});
    }
 };



