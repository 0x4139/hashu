# Hashu
hashes a string into an index within in a repository
## Installation
npm i --save hashu
## Usage

```javascript
var Hashu = require('hashu');
var emails=['a','b','c'];

var EmailsRepository=new Hashu(emails);
console.log(EmailsRepository.Get('0x4139@gmail.com'));
```
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

0x4139@gmail.com

## License

MIT