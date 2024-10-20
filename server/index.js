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
      origin: ["http://100.89.95.174:3000", "http://localhost:3000"]
   })
);

import mongodb from "./config/mongodb.config.js";
import codeModel from "./models/codes.js";

app.get("/health", (req, res) => {
   return res.sendStatus(200);
});

app.post("/upload", async (req, res) => {
   const { title, code } = req.body;
   if (!title || !code) return;
   const codeRes = await codeModel.create({
      title,
      code
   });

   if (codeRes) return res.sendStatus(200);
});

app.get("/getCodes", async (req, res) => {
   const codes = await codeModel.find({});

   return res.status(200).json({
      codes
   });
});

app.listen(4000, () => console.log("connected to server.."));
