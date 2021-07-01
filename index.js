main();

async function main() {
	console.log('hello there');
	console.log("Greetings")
	multiply(3, 3) == 9
	divide(4, 2) == 2
	divide(1, 0) == 0
	squareRoot(4) == 2
}

function multiply(x, y) {
	return x * y
}

function divide(x, y){
	if(y == 0) {
		console.log("You're weird")
		return 0
	}
	return x / y
}

function squareRoot(x){
	return Math.sqrt(x)
}
