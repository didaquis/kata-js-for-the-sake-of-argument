function numbers(...arg) {

	if (arg.length === 0) {
		return false;
	}

	let result = true;

	for(let i = 0; i < arg.length; i++){
		if (typeof arg[i] !== 'number') {
			result = false;
		}
	}

	return result;
}

module.exports = numbers;