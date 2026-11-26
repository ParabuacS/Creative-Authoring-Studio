const express = require("express");

const app = express();
const port = 3000;

// Parsing JSON requests
app.use(express.json());

// Health checking to make sure that the server is responsive
app.get("/api/health", (request, response) => {
    response.status(200).json({
        status: "success",
        message: "Creative Authoring Studio API is running."
    });
});

app.listen(port, () => {
    console.log(`Creative Authoring Studio server is running on http://localhost:${port}`);
});
