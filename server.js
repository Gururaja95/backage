import express from "express"
import dotenv from "dotenv"
import stripe from "stripe"


dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) =>{
    res.sendFile("index.js", { root: "public"});
});

let stripeGateway = stripe(process.env.stripe_key);

app.listen(3000, () => {
    console.log("listing on port 3000");
});