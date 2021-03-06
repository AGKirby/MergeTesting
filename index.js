const assert = require('assert');
const logger = require('./logger');

main();

async function main() {
    const startTime = new Date();

    await program();
    console.log( "Hell

    const endTime = new Date() - startTime;
    logger.info(`Execution time: ${endTime} ms`);
}

async function program() {
    logger.info('Hello there!');
    logger.info(`2 + 2 = ${add(2, 2)}`);
    logger.info(`4 - 3 = ${subtract(4, 3)}`);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
