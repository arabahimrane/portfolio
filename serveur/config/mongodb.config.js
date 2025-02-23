const mongoose = require('mongoose');
const env = require(`../environment/production`);

exports.clientPromise = mongoose
    .connect(env.dbUrl)
    .then(() => {
        console.log("Connected to the database successfully");
    })
    .catch((err) => console.error(err));