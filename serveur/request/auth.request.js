const AdminData = require('./model/admin.model');
const { getAdminByUsername } = require('../request/admin.request');
const { createJwtToken, expiredJwtTest } = require('../config/jwt.config');
const { newClient, setToken } = require('../request/client.request')

exports.testSession = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        const result = await expiredJwtTest(token, true);

        req.testSessionResult = result;

        next();
    } catch (error) {
        res.sendStatus(403);
    }
}

exports.testWebSitSession = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {

            const result = expiredJwtTest(token, false);

            if (token != result) {
                await setToken(token, result);
            }
            res.setHeader('Authorization', result);
        } else {
            console.log(req.body);
            await newClient(req.body).then((client) => {
                console.log("client: ", client.token)
                res.setHeader('Authorization', client.token);

            }).catch((error) => {
                console.log(error);
                res.status(403).json({ title: "statu 403", content: error.message });
            })
        }
        next()

    } catch (error) {
        res.sendStatus(403);
    }
}

exports.singup = async (formData) => {

    try {
        const hashedPassword = await AdminData.hashPassword(formData.password);
        const newAdmin = new AdminData({
            username: formData.username.trim(),
            email: formData.email.trim(),
            password: hashedPassword
        });

        await newAdmin.save();

        return await this.signin(formData);

    } catch (e) {
        throw new Error("admin all redy exist");
    }
}

exports.signin = async (formData) => {
    var username = formData.username;

    var admin = await getAdminByUsername(username);

    if (admin) {

        const password = await admin.comparePassword(formData.password);

        if (password) {

            var tokenFun = createJwtToken(admin.id, true);
            return tokenFun;

        } else {

            throw new Error("username or password incorrect");

        }

    } else {

        throw new Error("username or password incorrect");

    }
}