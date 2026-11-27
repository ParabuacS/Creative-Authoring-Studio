const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from the backend directory.
dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

// Establish a connection to the MongoDB Atlas database.
async function connectDatabase() {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MONGODB_URI is missing from the backend .env file.");
    }

    await mongoose.connect(mongoUri, {
        dbName: "creativeAuthoringStudio"
    });

    console.log("MongoDB Atlas database connected successfully.");
}

module.exports = connectDatabase;
