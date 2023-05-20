//bring in the fibonacci search module
const FibonacciSearch = require('./fibonacci-search');

describe('fibonacciSearch()', () => {
    beforeEach(() => fibonacciSearch = new FibonacciSearch.fibonacciSearch());
    describe('black box tests', () => {
        describe('input validation', () => {
            it('should accept an array of numbers and a number to search for without throwing', () => {
                expect(() => fibonacciSearch.search([], 1)).not.toThrow();
            });
            it('should throw an error if the first argument is string', () => {
                expect(() => fibonacciSearch.search('not an array', 1)).toThrow();
            });
            it('should throw an error if the first argument is a number', () => {
                expect(() => fibonacciSearch.search(1, 1)).toThrow();
            });
            it('should throw an error if the first argument is an object', () => {
                expect(() => fibonacciSearch.search({}, 1)).toThrow();
            });
            it('should throw an error if the first argument is null', () => {
                expect(() => fibonacciSearch.search(null, 1)).toThrow();
            });
            it('should throw an error if the first argument is undefined', () => {
                expect(() => fibonacciSearch.search(undefined, 1)).toThrow();
            });
            it('should throw an error if the second argument is a string', () => {
                expect(() => fibonacciSearch.search([], 'not a number')).toThrow();
            });
            it('should throw an error if the second argument is an object', () => {
                expect(() => fibonacciSearch.search([], {})).toThrow();
            });
            it('should throw an error if the second argument is null', () => {
                expect(() => fibonacciSearch.search([], null)).toThrow();
            });
            it('should throw an error if the second argument is undefined', () => {
                expect(() => fibonacciSearch.search([], undefined)).toThrow();
            });
            //if array has bad values
            it('should throw an error if the array contains a string', () => {
                expect(() => fibonacciSearch.search(['not a number'], 1)).toThrow();
            });
            it('should throw an error if the array contains an object', () => {
                expect(() => fibonacciSearch.search([{}], 1)).toThrow();
            });
            it('should throw an error if the array contains null', () => {
                expect(() => fibonacciSearch.search([null], 1)).toThrow();
            });
            it('should throw an error if the array contains undefined', () => {
                expect(() => fibonacciSearch.search([undefined], 1)).toThrow();
            });
            it('should throw an error if the array contains a string', () => {
                expect(() => fibonacciSearch.search(['not a number'], 1)).toThrow();
            });
            it('should throw an error if the array contains an object', () => {
                expect(() => fibonacciSearch.search([{}], 1)).toThrow();
            });
            it('should throw an error if the array contains null', () => {
                expect(() => fibonacciSearch.search([null], 1)).toThrow();
            });
        });
        describe('searching', () => {
            it('should return -1 if the array is empty', () => {
                expect(fibonacciSearch.search([], 1)).toBe(-1);
            });
            it('should return -1 if the value is not found', () => {
                expect(fibonacciSearch.search([1, 2, 3, 4, 5], 6)).toBe(-1);
            });
            it('should return the index of the value if it is found', () => {
                expect(fibonacciSearch.search([1, 2, 3, 4, 5], 4)).toBe(3);
            });
        });
    });
    describe('white box tests', () => {
        describe('fibonacci sequence generator', () => {
            it('should return an array', () => {
                expect(Array.isArray(fibonacciSearch.generateFibonacciSequence(1))).toBe(true);
            });
            it('should return an array of numbers', () => {
                expect(fibonacciSearch.generateFibonacciSequence(1).every(item => typeof item === 'number')).toBe(true);
            });
            it('should return an array of numbers with the correct values', () => {
                expect(fibonacciSearch.generateFibonacciSequence(50)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
            });
            it('should return an array of numbers with the correct values', () => {
                expect(fibonacciSearch.generateFibonacciSequence(5000)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
                    89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]);
            });
        });
        describe('tooLowConsequence', () => {
            it('should decreases index by 1', () => {
                fibonacciSearch.index = 5;
                fibonacciSearch.tooLowConsequence(5);
                expect(fibonacciSearch.index).toBe(4);
            });
            it('should set offset to i', () => {
                fibonacciSearch.offset = 0;
                fibonacciSearch.tooLowConsequence(5);
                expect(fibonacciSearch.offset).toBe(5);
            });
        });
        describe('tooHighConsequence', () => {
            it('should decrease index by 2', () => {
                fibonacciSearch.index = 5;
                fibonacciSearch.tooHighConsequence();
                expect(fibonacciSearch.index).toBe(3);
            });
            it('should not change offset', () => {
                fibonacciSearch.offset = 5;
                fibonacciSearch.tooHighConsequence();
                expect(fibonacciSearch.offset).toBe(5);
            });
        });
        describe('search', () => {
            it('should call validateInput once', () => {
                fibonacciSearch.validateInput = jest.fn();
                fibonacciSearch.search([], 1);
                expect(fibonacciSearch.validateInput.mock.calls.length).toBe(1);
            });
            it('should call generateFibonacciSequence once', () => {
                fibonacciSearch.generateFibonacciSequence = jest.fn();
                fibonacciSearch.generateFibonacciSequence.mockReturnValue([0, 1]);
                fibonacciSearch.search([1, 2, 3], 1);
                expect(fibonacciSearch.generateFibonacciSequence.mock.calls.length).toBe(1);
            });
            it('should set index to the length of the fibonacci sequence minus 1', () => {
                fibonacciSearch.generateFibonacciSequence = jest.fn();
                fibonacciSearch.generateFibonacciSequence.mockReturnValue([0, 1]);
                fibonacciSearch.search([1, 2, 3], 1);
                expect(fibonacciSearch.index).toBe(1);
            });
            it('should set offset to 0', () => {
                fibonacciSearch.search([1, 2, 3], 1);
                expect(fibonacciSearch.offset).toBe(0);
            });
        });
    });
});