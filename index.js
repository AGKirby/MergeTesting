const assert = require('assert');

main();

async function main() {
	console.log('hello there');
	console.log('Greetings');

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

	try {
		console.log('testing multiply');
		assert(multiply(3, 3) == 9);
	} catch (e) {
		console.log(e);
	}

	try {
		console.log('testing divide');
		assert(divide(4, 2) == 2);
	} catch (e) {
		console.log(e);
	}

	try {
		console.log('testing divide by zero');
		assert(divide(1, 0) == 0);
	} catch (e) {
		console.log(e);
	}

	try {
		console.log('testing square root');
		assert(squareRoot(4) == 2);
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
