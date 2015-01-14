var Hash = require('./');
var emails=['a','b','c','d','e','f'];

var LettersRepository=new Hash(emails);
console.log(LettersRepository.Get('0x4139@gmail.com'));