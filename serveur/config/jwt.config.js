const secret = '49968d03-f4ef-4961-a78a-1b57c3972eed';
const jwt = require('jsonwebtoken');
const expiresTime = "4d";

exports.createJwtToken = (userId, autorisation) => {
    return jwt.sign(
        {
            admin: autorisation,
            userId: userId.toString(),
        },
        secret,
        { expiresIn: expiresTime }
    );

}

exports.expiredJwtTest = (token, autorisation) => {
    try {
        const decodedToken = jwt.verify(token, secret);
        const userId = decodedToken.userId.toString();

        if ((decodedToken.exp - Math.floor(Date.now() / 1000)) < 86400) {
            return this.createJwtToken(userId.toString(), autorisation);
        } else return token;

    } catch (e) {
        throw new Error("access denied");
    }
}
