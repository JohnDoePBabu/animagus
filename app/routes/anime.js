const express = require('express');
const router = express.Router();
const {putter, getter} = require('../controllers/anime');

router.route('/')
.get(function(req, res)  {
  console.log('entered');
  let name = req.body.name || req.query.name || req.param.name;
  console.log(name);
  getter(name, (err, animes) => {
    console.log(animes);
    if (err) res.status(500).send(err);
    else res.render('anime', { title: animes[0].name, message: `released on ${animes[0].released}` });
  });
    // 
})
.post((req, res) => {
  console.log(putter);
  putter(req.body, (err, instance) => {
    if (err) res.status(400).json({message: err});
    else res.status(200).json(instance);
  });
});
module.exports = router;