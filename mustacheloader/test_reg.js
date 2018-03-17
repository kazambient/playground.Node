'use strict';
var Registry = require('./Registry');
var reg = new Registry();

// add function
reg.add('/', 4);

// get function
console.log(reg.get('/'));

// if key exists
console.log('key exists ' + reg.keyExists('/'));

// is unique
var unq = {};
var not = {};
reg.add('u', unq);
console.log('this is tru ' + reg.isUnique(unq));//true
console.log('this is false ' + reg.isUnique(not));//false
reg.add('v',unq);
console.log('this is false ' + reg.isUnique(unq));

// remove a key
reg.remove('v');
console.log('removed v ' + reg.keyExists('v'));


// duplicate add throws error
reg.add('/', 42);


