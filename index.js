const express = require('express');
const router = require('./Routes/Products')

const app = express();
const PORT = process.env.PORT || 8080 ;

app.get('/', (req,res) => {
    res.send("Hii I am live");
})

// middlewear for routes

app.use('/api/products', router);

const start = async() => {
    try {
        app.listen(PORT, ()=>{
            console.log("Hello, connected to the backend");
        })
    } catch (error) {
        console.log(error);
    }
}

start();