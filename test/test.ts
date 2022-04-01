import { chalk, error, log, spinWhile, success } from '../src/index';

log('Hello world!');
error('Hello world!');
success('Hello world!');
console.log(chalk.gray('Hello world!'));
spinWhile('Resolving in 3 seconds', () => {
	return new Promise(resolve => setTimeout(resolve, 3000));
});
