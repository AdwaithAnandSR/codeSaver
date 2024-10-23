import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
   cors({
      origin: [
         "http://10.39.142.208:3000",
         "http://localhost:3000",
         "https://code-space-seven.vercel.app"
      ]
   })
);

import mongodb from "./config/mongodb.config.js";
import codeModel from "./models/codes.js";

app.get("/health", (req, res) => {
   return res.sendStatus(200);
});

app.post("/upload", async (req, res) => {
   try {
      const { title, code } = req.body;
      if (!title || !code) return;
      const codeRes = await codeModel.create({
         title,
         code
      });

      if (codeRes) return res.sendStatus(200);
   } catch (error) {
      console.log(error);
   }
});

app.get("/getCodes", async (req, res) => {
   try {
      const codes = await codeModel.find({});
      if (codes)
         return res.status(200).json({
            codes
         });
   } catch (error) {
      console.log(error);
   }
});

app.post("/deleteCode", async (req, res) => {
   try {
      const { id } = req.body;
      await codeModel.findOneAndDelete({ _id: id });
      return res.sendStatus(200);
   } catch (error) {
      console.log(error);
   }
});

app.listen(4000, () => console.log("connected to server.."));
