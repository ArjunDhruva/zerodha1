require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const { HoldingsModel } = require("./model/HoldingsModel.js");
const { PositionsModel } = require("./model/PositionsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");
const { WatchlistModel } = require("./model/WatchlistModel.js");
const { SignUp, LogIn } = require("./utility/AuthController.js");

const app = express();
const url = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/watchlist", async (req, res) => {
  const watchlistData = await WatchlistModel.find({});
  res.json(watchlistData);
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    console.log("Saved new order:", req.body);
    res.status(200).send("Order received!");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Error saving order");
  }
});

app.get("/newOrder", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.post("/signUp", SignUp);
app.post("/logIn", LogIn);

async function startServer() {
  try {
    await mongoose.connect(url);
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB:", err);
  }
}

startServer();
