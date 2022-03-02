import express from "express";
import dotenv from "dotenv";
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cors from 'cors';

import logger from "morgan";
//import mongoose from "mongoose";
import bodyParser from "body-parser";
//import routes from "./routes";
//import passport from "passport";
import path from "path";

//import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB()
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;

app.use(express.static("public"));

app.get(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

//app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening in ${process.env.NODE_ENV} mode on PORT ${PORT}!`.yellow.bold);
});
