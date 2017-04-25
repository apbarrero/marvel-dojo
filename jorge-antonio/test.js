#!/usr/bin/env node

const mocha = require('mocha');
const assert = require('assert');
const marvel = require('./marvel.js');


describe('createUrl', function(){
   it('returns proper url', function(){
      const now = Date.now() / 1000 | 0;
      assert.equal('http://gateway.marvel.com:80/v1/public/comics?dateDescriptor=nextWeek&ts='+now+'&apikey=theKey&hash=theHash',
         marvel.createUrl('nextWeek', now, 'theKey', 'theHash'));
   });
});

describe('hash', function(){
  it('returns proper hash', function(){
    const now = 42;
    assert.equal('e9dc856afea54c52784e253c4b7c58b4', marvel.hashUrl(now));
  });
});

