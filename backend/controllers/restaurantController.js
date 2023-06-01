
import Restaurant from '../models/Restaurant.js'


//create new restaurant

export const createRestaurant = async (req,res) => {

    const newRestaurant = new Restaurant(req.body)

    try {
        const savedRestaurant = await newRestaurant.save()

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully created',
            data: savedRestaurant,
        });
    }   catch (err) {
        res
        .status(500)
        .json({
            success:false,
             message:'Failed to create. Try again'});

    }
};

//update restaurant
export const updateRestaurant = async (req, res) => {
    const id = req.params.id

    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res
        .status(200)
        .json({
            success:true,
            message:'Successfully updated',
            data: updatedRestaurant,
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

//delete restaurant
export const deleteRestaurant = async (req, res) => {
    const id = req.params.id

    try {
        await Restaurant.findByIdAndDelete(id);
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

//getSingle restaurant
export const getSingleRestaurant = async (req, res) => {
    const id = req.params.id

    try {
        const restaurant = await Restaurant.findById(id);
        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:restaurant
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

//getAll restaurant
export const getAllRestaurant = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);

    try {
        const restaurants = await Restaurant.find({})
        .skip(page * 8)
        .limit(8);

        res.status(200).json({success:true,
        count:restaurants.length,
        message:"Successful",
        data: restaurants, })
        
    }catch (err) {
        res.status(404).json({
            success:false,
            message: "not found",
        });
    }
};

//get restaurant by search
export const getRestaurantBySearch = async(req,res) => {


    //here 'i' means case sensitive

    const city = new RegExp(req.query.city, 'i')
    const name = new RegExp(req.query.name, 'i')

    try {
        const restaurants = await Restaurant.find({ city, name})

        res
        .status(200)
        .json({
            success:true,
            message:'Successful',
            data:restaurants,
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

//get restaurants counts
 export const getRestaurantcount = async(req,res) => {
    try {
        const restaurantCount = await Restaurant.estimatedDocumentCount();
        res.status(200).json({ success: true, data : restaurantCount});
    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch"});
    }
 };



