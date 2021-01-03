import express from "express";
import dotenv from "dotenv";
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB()
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening in ${process.env.NODE_ENV} mode on PORT ${PORT}!`.yellow.bold);
});
