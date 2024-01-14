require('dotenv').config();
const express = require('express');
const router = require('./Routes/Products')
const connectDB = require('./Model/Connect')

const app = express();
const PORT = process.env.PORT || 8000 ;

app.get('/', (req,res) => {
    res.send("Hii I am live");
})

// middlewear for routes

app.use('/api/products', router);

const start = async () => {
    try {
        console.log("Connecting to the database...");
        await connectDB(process.env.mongoURI);
        console.log("Connected to the database.");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};


start();
