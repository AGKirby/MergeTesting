const assert = require('assert');
const logger = require('./logger.js');

main();

async function main() {
	logger.Info('hello there');

	logger.Info('problem here');
	logger.Info("I don't know about this");

	console.log(logger.greet());

	logger.adam();
	logger.Info('asdf');
	logger.Warn('afewa');

	logger.Error('asdf');
}
