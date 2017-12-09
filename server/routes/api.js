const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send(['api works', 'another value']);
});

router.post('/', (req, res) => {
    res.send();
});

module.exports = router;