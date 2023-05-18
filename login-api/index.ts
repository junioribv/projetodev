import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from './router';
import mongoose from "mongoose";
import cors from 'cors';

mongoose.set('strictQuery', false);

const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

mongoose
  .connect(process.env.MONGODB_URL as string, {
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  console.log(`Servidor está na porta ${PORT}`);
});
