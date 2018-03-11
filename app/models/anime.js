'use strict';

const ottoman = require('./bucket');

const animeModel = {name: 'string', released: 'Date'};
const anime = ottoman.model('anime', animeModel, {
  index: {
    findByName: {
      by: 'name'
    }
  }
});
ottoman.ensureIndices(function(err) {
  if (err) return console.error(err);
});

module.exports = anime;