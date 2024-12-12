const express = require("express");
const app = express();


app.get("/", (req, res) => {
res.status(200).send("Fragrance");
});
app.get("/about", (req, res) => {
res.status(200).send("About Page");
});
const port = 3000;
app.listen(port, () => {
console.log('Site is running on port ${port}`);
});
