import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

//function to create the connection to mongoDB 
const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected! DB host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error(`MongoDB connection error ${error.message}`)
        //exite process with failure 
        process.exit(1);
    }
}

export default connectDB;