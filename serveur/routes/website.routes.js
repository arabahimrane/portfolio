const router = require('express').Router();
const { getCertificate } = require('../request/client.request');



router.get('/', async (req, res) => {
    try {
        var certificates = await getCertificate();
        res.status(200).json({
            certificate: certificates
        })
    } catch (error) {
        res.status(403).json({ title: "statu 403", content: error.message });
    }
})

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Réponse avec un en-tête personnalisé'
    });
})

module.exports = router;