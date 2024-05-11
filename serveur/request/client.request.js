
const ClientData = require('./model/client.model');
const Certificate = require('./model/certificate.model');
const { createJwtToken } = require('../config/jwt.config');

exports.newClient = async (client) => {
    try {

        var client = new ClientData({
            ip: client.ip,
            city: client.city,
            country_name: client.country_name,
            latitude: client.latitude,
            longitude: client.longitude,
        });

        var newClient = await client.save();

        var token = createJwtToken(newClient.id, false);

        return await ClientData.findByIdAndUpdate(newClient.id, { token: token }, { new: true });
    } catch (error) {
        throw new Error(error);
    }
}

exports.delletToken = async (token) => {
    try {

        return await ClientData.deleteOne({ token: token });

    } catch (error) {

        throw new Error(error);

    }

}

exports.getClientById = async (id) => {
    return await ClientData.findOne({ id: id });
}

exports.getClientByToken = async (token) => {
    return await ClientData.findOne({ token: token });
}

exports.setVisitValue = async (token) => {
    return await this.getClientByToken(token)
        .then(async (client) => {
            client.visite = client.visite + 1;
            return await client.save();
        })
}

exports.setToken = async (token, newToken) => {
    return await ClientData.findOneAndUpdate(
        { token: token }, // Filter by the current token
        { $set: { token: newToken } }, // Update the token with the new value
        { new: true } // Return the updated document
    );
}

exports.getCertificate = async () => {
    return await Certificate.find({});
}