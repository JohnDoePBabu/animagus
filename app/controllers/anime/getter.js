'use strict';

const model = require('../../models/anime');

const getter = (name, callback) => {
  console.log('entered getter', name);
  model.findByName(name, (err, animes) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(animes);
      callback(null, animes);
    }
  });
};

module.exports.getter = getter;