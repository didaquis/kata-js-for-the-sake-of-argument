function numbers(...arg) {
	if (arg.length === 0) {
		return false;
	}
	return arg.every(argument => typeof argument === 'number');
}

module.exports = numbers;
