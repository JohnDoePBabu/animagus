const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res)  {
  res.json({'message': 'Anime!'});
});

module.exports = router;
