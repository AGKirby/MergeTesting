const assert = require('assert');
const logger = require('./logger');

main();

async function main() {
	logger.Info('asdf');
	logger.Warn('afewa');

	logger.Error('asdf');
}
