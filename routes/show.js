const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async(req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        // shows link expired
        if (!file) {
            return res.render('download', { error: 'Link has been expired.' });
        }
        // otherwise load the download page 
        return res.render('download', { uuid: file.uuid, fileName: file.filename, fileSize: file.size, downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}` });
    } catch (err) {
        // while downloading is something goes wrong
        return res.render('download', { error: 'Something went wrong.' });
    }
});


module.exports = router;