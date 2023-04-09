const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");

const PORT = 3500;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewURLParser: true,
        useUnifiedTopology: true,

    }).then(() => {
        console.log("Connected to MongoDB")
    }).catch((err) => {
        console.log(err);
    });
app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});