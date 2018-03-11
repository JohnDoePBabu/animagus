'use strict';

const {expect} = require('chai');
const stub = require('testdouble');
const {putter} = require('../app/controllers/anime/putter');

describe('anime-putter', () => {
  it('should insert anime', done => {
    
    putter({name: 'Kimi no na wa', released: Date.now()}, (err, res) => {
      console.log('recieved');
      expect(err).to.be.not.ok
      expect(res.name).to.equal('Kimi no na wa');
      done();
    })
  });
  it('should fail if name is not present', done => {
    putter({ released: Date.now()}, (err) =>{
      expect(err).to.be.ok;
      done();
    });
  });
  it('should fail if released is not date', done => done());
})