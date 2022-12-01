var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send({
        byId: {
            family1: {
                name: 'Tayebani',
            },
            family2: {
                name: 'De Lazzari',
            }
        },
        allIds: ['family1', 'family2'],
    });
});

module.exports = router;