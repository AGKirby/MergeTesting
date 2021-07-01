const assert = require('assert');

main();

async function main() {
	// console.log('hello there');
	// console.log('Greetings');

	try {
		console.log('testing sum');
		assert(add(1, 2) == 4);
	} catch (e) {
		console.log(e);
	}

	console.log('done');
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	if (y == 0) {
		console.log("You're weird");
		return 0;
	}
	return x / y;
}

function squareRoot(x) {
	return Math.sqrt(x);
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function power(a, b) {
	return a ** b;
}
