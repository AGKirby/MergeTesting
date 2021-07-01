const assert = require('assert');

main();

async function main() {
	try {
		console.log('testing add');
		assert(add(1, 2) == 3);
	} catch (e) {
		console.log(e);
	}

	try {
		console.log('testing subtract');
		assert(subtract(5, 4) == 1);
	} catch (e) {
		console.log(e);
	}

	try {
		console.log('testing power');
		assert(power(2, 3) == 5);
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
