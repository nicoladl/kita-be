const express = require('express')
const router = express.Router()
const families = require('../services/families')

/* GET families */
router.get('/', async function(req, res, next) {
    try {
        res.json(await families.getMultiple(req.query.page))
    } catch (err) {
        console.error(`Error while getting families `, err.message)
        next(err)
    }
})

/* POST family */
router.post('/', async function(req, res, next) {
    try {
        res.json(await families.create(req.body))
    } catch (err) {
        console.error(`Error while creating family`, err.message)
        next(err)
    }
})

module.exports = router