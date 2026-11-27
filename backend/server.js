const express = require("express");
const path = require("path");
const connectDatabase = require("./config/database");

const app = express();
const port = 3000;

// Define the location of the frontend directory.
const frontendPath = path.join(__dirname, "../frontend");

// Configure middleware to parse incoming JSON requests.
app.use(express.json());

// Health-check route to confirm that the backend server is running.
app.get("/api/health", (request, response) => {
    response.status(200).json({
        status: "success",
        message: "Creative Authoring Studio API is running."
    });
});

// Serve the frontend files through the Express server.
app.use(express.static(frontendPath));

// Connect to MongoDB before starting the Express server.
async function startServer() {
    try {
        await connectDatabase();

        app.listen(port, () => {
            console.log(`Creative Authoring Studio server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to start the application.");
        console.error("Check your MongoDB connection URI, credentials, and Atlas network access.");
        console.error("Error type:", error.name);

        process.exit(1);
    }
}

// Start the application.
startServer();