var Hash = require('./');
var emails=['a','b','c'];

var EmailsRepository=new Hash(emails);
console.log(EmailsRepository.Get('0x4139@gmail.com'));