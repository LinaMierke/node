const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log('heloooooo!!!!! hi thereee!')
  res.send('Hey! It works!');
 

});

module.exports = router;
