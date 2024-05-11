const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const certificateSchema = Schema({
    title: { type: String },
    url: { type: String },
    urlImage: { type: String },

})

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
