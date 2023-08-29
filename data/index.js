const cakeSelection = require("./cakeSelection");
const cart = require("./cart.json");
const db = require("./db.json");

module.exports = () => ({
    cakeSelection, cart, db
});