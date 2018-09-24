const numbers = require('../src/index.js');

describe('numbers test', () => {
	it('numbers should be a function', () => {
		expect(typeof numbers).toBe('function');
	});

	it('numbers should return true if receive an integer', () => {
		expect(numbers(3)).toBe(true);
	});

	it('numbers should return false if receive a string', () => {
		expect(numbers('foo')).toBe(false);
	});

	it('numbers should return true if receive NaN', () => {
		expect(numbers(NaN)).toBe(true);
	});

	it('numbers should return true if receive two integers and NaN', () => {
		expect(numbers(1, 3, NaN)).toBe(true);
	});

	it('numbers should return true if receive any number of integers', () => {
		expect(numbers(1, 4, 3, 2, 5)).toBe(true);
		expect(numbers(0)).toBe(true);
		expect(numbers(-1,-3)).toBe(true);
	});

	it('numbers should return false if receive any number of integers and a string', () => {
		expect(numbers(3, 4, 5, 'bar')).toBe(false);
		expect(numbers('biz', 3, 4, 5)).toBe(false);
		expect(numbers(1, "a", 3)).toBe(false);
	});

	it('numbers should return false if not receive any parameter', () => {
		expect(numbers()).toBe(false);
	});
});
