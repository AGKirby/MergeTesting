exports.Info = (msg) => {
	console.log(`${new Date()} - INFO: ${msg}`);
};

exports.Warn = (msg) => {
	console.log(`${new Date()} - WARN: ${msg}`);
}
exports.greet = () => {
	return 'Hello there';
};

exports.adam = () => {
	console.log('Adam is the coolest');
};

exports.alex = () => {
	console.log("Alex is the weirdest");
}