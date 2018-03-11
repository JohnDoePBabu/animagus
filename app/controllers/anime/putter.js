'use strict';

const model = require('../../models/anime');

const validateInsert = (body) => {
  return (body.name && body.released) 
};

const putter = (body, callback) => {
  console.log(body);
  if (validateInsert(body)) {
    console.log('validated');
    let instance = new model(body);
    console.log('created model');
    console.time('couchbase')
    instance.save(err =>{
      console.timeEnd('couchbase');
      callback(err, instance);
    });
  } else process.nextTick(callback.bind(null, 'bad field'));
};

module.exports.putter = putter;