#!/usr/bin/env node

const http = require('http');

function createUrl(dateDescriptor, ts, apikey, hash)
{
  var endpoint = 'http://gateway.marvel.com:80/v1/public/comics';
  var url = endpoint+'?'+'dateDescriptor='+dateDescriptor+'&ts='+ts+'&apikey='+apikey+'&hash='+hash;

  return url;
}

function main()
{
   console.log('bar');
}

if (!module.parent)
   main();

module.exports = {createUrl};
