const assert = require('assert');
const logger = require('./logger.js');

main();

async function main() {
	const startTime = new Date();

	await program();

	const endTime = new Date() - startTime;
	logger.info(`Execution time: ${endTime} ms`);
}

async function program() {
	console.log("Hello World!");
	console.log("2 + 2 = " + add(2,2));
}

function add(a, b) {
	return a + b;
}