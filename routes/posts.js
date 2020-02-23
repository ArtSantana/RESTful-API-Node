const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Pau no seu cu');
})

module.exports = router;