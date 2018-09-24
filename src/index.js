function numbers(...arg) {
	if (arg.length === 0) {
		return false;
	}

	let result = true;
	for (let argument of arguments){
		if (typeof argument !== 'number') {
			result = false;
		}
	}

	return result;
}

module.exports = numbers;