#!/usr/bin/env node

const http = require('http');
const md5 = require('md5');

const publicKey = '97f295907072a970c5df30d73d1f3816';
const privateKey = 'ed54a875c0dffad1fa6af84e66ff104434a1c6cc';

function createUrl(dateDescriptor, ts, apikey, hash)
{
  var endpoint = 'http://gateway.marvel.com:80/v1/public/comics';
  var url = endpoint+'?'+'dateDescriptor='+dateDescriptor+'&ts='+ts+'&apikey='+apikey+'&hash='+hash;

  return url;
}

function hashUrl(ts)
{
   return md5(ts+publicKey+privateKey);
}

function apiRequest(ts, cb)
{
   cb({not: 'implemented'});
}

function main()
{
   console.log('bar');
}

if (!module.parent)
   main();

module.exports = {createUrl, hashUrl, apiRequest, publicKey, privateKey};
