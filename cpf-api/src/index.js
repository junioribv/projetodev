const dotenv = require('dotenv');
dotenv.config();
const cpf = require("cpf");
const cors = require("cors");
const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");


const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewURLParser: true,
        useUnifiedTopology: true
    
    }).then(() => {
        console.log("connectado ao DBMongo")
    }).catch((err) => {
        console.log(err)
    })

    app.listen(PORT, async () => {
    console.log(`servidor está na porta ${PORT}`);
})

