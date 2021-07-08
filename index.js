const assert = require('assert');
const logger = require('./logger.js');

main();

async function main() {
	const startTime = new Date();

	await program();

	const endTime = new Date() - startTime;
	logger.info(`Execution time: ${endTime} ms`);
}

async function program() {}
