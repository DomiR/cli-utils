const utils = require('../dist/index.js');
const { colorette, error, log, spinWhile, success } = utils;


log('Hello world!');
error('Hello world!');
success('Hello world!');
console.log(colorette.gray('Hello world!'));
spinWhile('Resolving in 3 seconds', () => {
	return new Promise(resolve => setTimeout(resolve, 3000));
});
