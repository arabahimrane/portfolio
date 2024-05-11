const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const adminSchema = Schema({
    username: { type: String, unique: true },
    email: { type: String, index: true, required: true, unique: true },
    password: { type: String },
})


adminSchema.plugin(uniqueValidator);

adminSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
};

adminSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const AdminData = mongoose.model("Admin", adminSchema);



module.exports = AdminData;
