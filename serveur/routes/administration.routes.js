const router = require('express').Router();
const { getData } = require('../request/admin.request');
const { saveCertificate, getCertificate, deletCertificate } = require('../request/data.request');
const { sendToS3, delletToS3 } = require('../controller/aws.controller');

router.get("/", async (req, res) => {
    try {
        console.log('/administration', req.testSessionResult)
        var admin = req.testSessionResult;
        res.status(200).json({ admin });
    } catch (error) {
        console.log('error', error.message);
        res.status(403).json({ title: "statu 403", content: error.message });
    }
});

router.get('/getData/', async (req, res) => {

    const page = parseInt(req.query.page) + 1;
    await getData(page, req.query.pageSize).then((clients) => res.status(200).json(clients))
        .catch((error) => {
            res.status(403).json({ title: "statu 403", content: error.message })
        })
});

// router.delete('/upload/', async (req, res) => {
//     console.log('dellet', req.query.file);
//     await delletToS3(req.query.file).then(async () => {
//         await deletCertificate(req.query.file).then(() => {
//             res.sendStatus(200).json({ message: 'ok' });
//         }).catch((error) => { throw new Error(error) })
//     }).catch((error) => {
//         res.status(403).json({ title: "statu 403", content: error.message })

//     })
// })

router.post('/upload', async (req, res) => {
    await sendToS3(req.body.file, 'image').then((file) => res.status(200).json({ url: file })).
        catch((error) => {
            res.status(403).json({ title: "statu 403", content: error.message })
        })
});



router.post('/certificate', async (req, res) => {
    await saveCertificate(req.body).then((data) => res.status(200).json({ data: data })).
        catch((error) => {
            res.status(403).json({ title: "statu 403", content: error.message })
        })

});

router.get('/certificate', async (req, res) => {
    await getCertificate().then((certificate) => {
        res.status(200).json(certificate);
    }).catch((error) => {
        res.status(403).json({ title: "statu 403", content: error.message })
    })
})

router.delete('/certificate', async (req, res) => {
    console.log('dellet', req.query);
    try {
        await deletCertificate(req.query.id)
            .then((result) => res.status(200).json(result))
            .catch((error) =>
                res.status(403).json({ title: "statu 403", content: error.message })
            )

    } catch (error) {
        res.status(403).json({ title: "statu 403", content: error.message })
    }
})

module.exports = router;