import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoute from "./routes/auth.routes.js"

dotenv.config(); //it will load the env variable 
connectDB(); //it will run the connectDB function from config/db.js

const app = express();

app.use(cors()) //it will enable CORS
app.use(express.json()) //parsed incoming request with json Data

//Routes
app.use("/api/v1/auth",authRoute);


// start the server

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
});