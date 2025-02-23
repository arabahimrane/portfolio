const router = require('express').Router();
const { singup, signin, testSession, testWebSitSession } = require('../request/auth.request');
const { newClient, delletToken } = require('../request/client.request');
const { expiredJwtTest } = require('../config/jwt.config');
const { setVisitValue } = require('../request/client.request');
const administration = require('./administration.routes');
const website = require('./website.routes');



//start sesion

router.post('/', async (req, res) => {

    if (req.headers.authorization) {
        try {
            var token = await expiredJwtTest(req.headers.authorization, false);
            await setVisitValue(token);
            res.status(200).end();
        } catch (error) {
            res.status(403).json({ title: "statu 403", content: error.message });
            
        }

    } else {

        await newClient(req.body).then((client) => {
            res.status(200).send(client);

        }).catch((error) => {
            res.status(403).json({ title: "statu 403", content: error.message });
        })
    }

});


router.post("/signin", async (req, res) => {
    
    if (req.body == null) {
        console.log('body null');
        res.status(403).json({ title: "statu 403", content: "access denied" });
    }
    await signin(req.body).then(async (token) => {
        console.log('token', token);
        res.status(200).json({ token: token });
        await delletToken(req.body.token);

    }).catch((error) => {
        console.log('error', error.message);
        res.status(403).json({ title: "statu 403", content: error.message });
    });

});

router.post("/singup", async (req, res) => {
    if (req.body == null) {
        res.status(403).json({ title: "statu 403", content: "access denied" });
    }
    await singup(req.body).then((token) => {

        res.status(200).json({ token: token });

    }).catch((error) => {

        res.status(403).json({ title: "statu 403", content: error.message });

    });

})

router.use('/website', testWebSitSession, website);

router.use('/administration', testSession, administration);

router.use('*'  , (req, res) => {
    res.status(404).json({ title: "statu 404", content: "not found" });
});

module.exports = router;