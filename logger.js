exports.info = (msg) => {
	console.log(`${new Date()} - INFO: ${msg}`);
};

exports.warn = (msg) => {
	console.log(`${new Date()} - WARN: ${msg}`);
};

exports.error = (msg) => {
	console.log(`${new Date()} - ERROR: ${msg}`);
};

exports.debug = (msg) => {
	console.log(`${new Date()} - DEBUG: ${msg}`);
};
