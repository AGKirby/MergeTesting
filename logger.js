exports.Info = (msg) => {
	console.log(`${new Date()} - INFO: ${msg}`);
};

exports.greet = () => {
	return 'Hello there';
};

exports.adam = () => {
	console.log('Adam is the coolest');
};
exports.Warn = (msg) => {
	console.log(`${new Date()} - WARN: ${msg}`);
};

exports.Error = (msg) => {
	console.log(`${new Date()} - ERROR: ${msg}`);
};
