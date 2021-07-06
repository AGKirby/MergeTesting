exports.Info = (msg) => {
	console.log(`${new Date()} - INFO: ${msg}`);
};

exports.Warn = (msg) => {
	console.log(`${new Date()} - WARN: ${msg}`);
};

exports.Error = (msg) => {
	console.log(`${new Date()} - ERROR: ${msg}`);
};
