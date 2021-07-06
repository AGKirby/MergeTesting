const assert = require('assert');
const logger = require('./logger.js');

main();

async function main() {
	console.log(logger.greet());
}
