/**
 * cli utils
 *
 * @author Dominique Rau [domi.github@gmail.com](mailto:domi.github@gmail.com)
 * @version 0.0.1
 */

import chalkNice from 'chalk';
import ora from 'ora';

// extracted from https://github.com/jeffijoe/typesync/blob/master/src/cli-util.ts
export const chalk = chalkNice;

/**
 * Like regular console.log, but better.
 * @param message
 */
export function log(message: string) {
	console.log(`${chalk.white('»')}  ${chalk.dim(message)}`);
}

/**
 * Makes success feel even sweeter.
 * @param text
 */
export function success(text: string) {
	console.log(`${chalk.green('✔')}  ${chalk.white.bold(text)}`);
}

/**
 * Logs an error all pretty.
 * @param err
 */
export function error(err: Error | string) {
	const msg = err instanceof Error ? err.message : err;
	const stack = err instanceof Error ? `\nStack:\n${err.stack}` : '';
	console.log(`${chalkNice.red('✖')}  ${chalkNice.bgRed(chalkNice.white(msg))}${stack}`);
}

/**
 * Spins while doing work. Stops when done.
 * @param text
 * @param fn
 */
export async function spinWhile<T>(text: string, fn: () => Promise<T>) {
	const spinner = (ora(' ' + chalkNice.dim(text)) as any).start();
	try {
		return await fn();
	} finally {
		spinner.stop();
	}
}
