

import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import locationRoute from './routes/locations.js'
import restaurantRoute from './routes/restaurants.js'
import pharmacieRoute from './routes/pharmacies.js'
import hotelRoute from './routes/hotels.js'
import cafeRoute from './routes/cafes.js'
import travelagencieRoute from './routes/travelagencies.js'

import userRoute from './routes/users.js'



dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true
}

//database connection
mongoose.set("strictQuery", false);
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB database connected');

    } catch (err) {
        console.log('MongoDB database connection failed');

    }
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/locations", locationRoute);
app.use("/api/v1/restaurants", restaurantRoute);
app.use("/api/v1/pharmacies", pharmacieRoute);
app.use("/api/v1/hotels", hotelRoute);
app.use("/api/v1/cafes", cafeRoute);
app.use("/api/v1/travelagencies", travelagencieRoute);
app.use("/api/v1/users", userRoute);


app.listen(port, ()=> {
    connect();
    console.log('server listening on port', port);
})