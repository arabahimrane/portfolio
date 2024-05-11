const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = Schema({
    ip: { type: String },
    city: { type: String },
    country_name: { type: String },
    latitude: { type: String }, 
    longitude: { type: String },
    token: { type: String },
    visite: { type: Number, default: 1 },
    date: { type: Date, default: Date.now }
})

const ClientData = mongoose.model("Client", clientSchema);

module.exports = ClientData;
