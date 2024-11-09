require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const productDB = require("./productDB");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hi, I m live ");
});

// middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I m connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();