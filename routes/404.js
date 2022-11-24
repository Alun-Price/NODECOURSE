const path = require('path');

const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
});

module.exports = router;
