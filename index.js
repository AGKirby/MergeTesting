const assert = require('assert');
const logger = require('./Logger/logger.js');

main();

async function main() {
	const startTime = new Date();

	await program();

	const endTime = new Date() - startTime;
	logger.info(`Execution time: ${endTime} ms`);
}

async function program() {
	logger.debug('Hello World!');
	logger.debug('Adam was here!');
	logger.debug('2 + 2 = ' + add(2, 2));
	logger.debug('4 - 3 = ' + subtract(4, 3));
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}
