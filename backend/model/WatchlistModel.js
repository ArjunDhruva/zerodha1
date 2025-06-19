const mongoose = require('mongoose');
const WatchlistSchema = require("../schemas/WatchlistSchema.js");

const WatchlistModel = mongoose.model("watchlist", WatchlistSchema)

module.exports = {WatchlistModel};