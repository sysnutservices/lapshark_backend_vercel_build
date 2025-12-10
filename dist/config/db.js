import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) throw new Error("MONGO_URI missing");

        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("DB Error:", error);
        throw error;
    }
};

module.exports = connectDB;   // <-- IMPORTANT
