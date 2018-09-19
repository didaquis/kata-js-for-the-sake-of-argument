const numbers = require('../src/index.js');

describe('numbers test', () => {
	it('numbers should be a function', () => {
		expect(typeof numbers).toBe('function');
	});
});
