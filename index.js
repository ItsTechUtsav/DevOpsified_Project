const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to DevOps World! This is a simple Node.js application.");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        time: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});