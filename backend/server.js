const express = require("express");
const products = require('./data/products');
const cors = require('cors');

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
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
