const express = require('express');
const router = express.Router();

router.get('/', (Request, Response) => {
    Response.send('U are in home page, stupid');
})

module.exports = router;