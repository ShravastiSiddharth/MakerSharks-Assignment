const express = require('express');
const connectDB = require('./config/db');
const supplierRoutes = require('./routes/supplierRoutes');


const app = express();


connectDB();


app.use(express.json());
app.use('/api/supplier', supplierRoutes);


module.exports = app;
