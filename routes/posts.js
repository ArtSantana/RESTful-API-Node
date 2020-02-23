const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Posts page');
})

router.post('/', (Request, Response) => {
    console.log(Request.body);
    Response.send(Request.body);
})


module.exports = router;