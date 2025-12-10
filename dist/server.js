"use strict";
// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import apiRoutes from '../src/routes/api';
// import path from 'path';
// import connectDB from '../src/config/db';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// // Connect to Database
// const app = express();
// connectDB();
// app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
// app.use(cors());
// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   })
// );
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
// // Routes
// app.use('/api', apiRoutes);
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });
// app.listen(5000, "0.0.0.0", () => {
//   console.log("Server running on http://0.0.0.0:5000");
// });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

// IMPORTANT: NO app.listen() here (for Vercel Serverless)
module.exports = app;
