#!/usr/bin/env node

const mocha = require('mocha');
const assert = require('assert');
const marvel = require('./marvel.js');

describe('createUrl', function(){
   it('returns proper url', function(){
      var now = Date.now() / 1000 | 0;
      assert.equal('http://gateway.marvel.com:80/v1/public/comics?dateDescriptor=nextWeek&ts='+now+'&apikey=theKey&hash=theHash',
         marvel.createUrl('nextWeek', now, 'theKey', 'theHash'));
   });
});

