const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Posts page');
})

router.get('/pathTest', (request, response) => {
    response.send('Path test');
})

router.post('/', (request, response) => {
    console.log(request.body);
    response.send(request.body);
})

module.exports = router;