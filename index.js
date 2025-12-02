const express = require("express");
const connectDB = require("./db");
const notesRoutes = require("./notesRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use(notesRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
