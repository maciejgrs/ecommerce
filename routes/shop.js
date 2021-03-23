
const express = require('express');
const router = express.Router()




router.use((req, res, next) => {
    console.log('in the another middle ware');
    res.send('<p>Hi from expresss</p>')
})


module.exports = router