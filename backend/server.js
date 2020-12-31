import express from "express";
import dotenv from "dotenv";
import products from './data/products.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening in ${process.env.NODE_ENV} mode on PORT ${PORT}!`);
});