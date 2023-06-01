
import Travel from '../models/TravelAgencie.js';



//create new travelagencie

export const createTravel = async (req,res) => {

    const newTravel = new Travel(req.body)

    try {
        const savedTravel = await newTravel.save()

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully created',
            data: savedTravel,
        });
    }   catch (err) {
        res
        .status(500)
        .json({
            success:false,
             message:'Failed to create. Try again'});

    }
};

//update travelagencie
export const updateTravel = async (req, res) => {
    const id = req.params.id

    try {
        const updatedTravel = await Travel.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully updated',
            data: updatedTravel,
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

//delete travelagencie
export const deleteTravel = async (req, res) => {
    const id = req.params.id

    try {
        await Travel.findByIdAndDelete(id);
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

//getSingle travelagencie
export const getSingleTravel = async (req, res) => {
    const id = req.params.id

    try {
        const travel = await Travel.findById(id);
        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:travel
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

//getAll travelagencie
export const getAllTravel = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);

    try {
        const travels = await Travel.find({})
        .skip(page * 8)
        .limit(8);

        res.status(200).json({success:true,
        count:travels.length,
        message:"Successful",
        data: travels, })
        
    }catch (err) {
        res.status(404).json({
            success:false,
            message: "not found",
        });
    }
};

//get travelagencie by search
export const getTravelBySearch = async(req,res) => {


    //here 'i' means case sensitive

    const city = new RegExp(req.query.city, 'i')
    const name = new RegExp(req.query.name, 'i')

    try {
        const travels = await Travel.find({ city, name})

        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:travels,
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

//get travelagencies counts
 export const getTravelcount = async(req,res) => {
    try {
        const travelCount = await Travel.estimatedDocumentCount();
        res.status(200).json({ success: true, data : travelCount});
    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch"});
    }
 };



