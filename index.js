const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require("./config/db");

const userRoute = require("./routes/userRoutes");
const notesRoute = require("./routes/notes Routes");

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
connectDB();


app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
    });


app.use("/api/users", userRoute);
app.use("/api/notes", notesRoute);




require('dotenv').config();


// Call connectDB only once
connectDB();




const PORT = process.env.PORT || 5007;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
