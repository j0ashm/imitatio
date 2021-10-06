const { nanoid } = require('nanoid')
const express = require('express')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(fileUpload())

app.post('/api/upload', (req, res) => {
    if (req.header("secret") !== process.env.SECRET) {
        return res.sendStatus(403)
    }

    if (!req.files) {
        return res.status(400).send('No data received')
    }
        
    const postFile = req.files.img
    let fileExtension = path.extname(postFile.name)

    if (!(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(fileExtension)) {
        return res.status(501).send('Server does not support this extension')
    } 

    let uploadName = `${nanoid(process.env.FILE_NAME_SIZE)}${fileExtension}`
    let uploadPath = `${__dirname}/uploads/${uploadName}`

    postFile.mv(uploadPath, function (err) {
        if (err) {
            return res.status(500).send(err)
        }

        res.send(`${process.env.DOMAIN}/uploads/${uploadName}`);
    })
})

app.get('/uploads/:fileName', (req, res) => {
    let path = `${__dirname}/uploads/${req.params.fileName}`

    try {
        if (fs.existsSync(path)) {
            res.sendFile(path)
        } else {
            return res.status(404).send('File was not found')
        }
    } catch (err) {
        return res.status(500).send(err)
    }
})

app.listen(process.env.PORT)
console.log('Server is live')