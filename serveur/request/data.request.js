const Certificate = require("./model/certificate.model")

exports.saveCertificate = async (certificate) => {
    try {
        return await new Certificate(
            {
                title: certificate.title,
                url: certificate.url,
                urlImage: certificate.urlImage
            }
        ).save()
    } catch (error) {
        throw new Error(error);
    }
}

exports.getCertificate = async () => {
    try {
        return await Certificate.find({});
    } catch (error) {
        throw new Error(error);
    }
}

exports.deletCertificate = async (id) => {
    try {

        return await Certificate.deleteOne({ _id: id });

    } catch (error) {
        throw new Error(error);
    }
}