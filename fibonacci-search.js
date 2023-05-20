class fibonacciSearch {

    constructor() {
        let index;
        let offset;
    }

    search(array, value) {
        this.validateInput(array, value);
        let fibonacciSequence = this.generateFibonacciSequence(array[array.length - 1]);
        this.index = fibonacciSequence.length - 1;
        this.offset = 0;
        let n = array.length;
        while (fibonacciSequence[this.index] > 0) {
            let i = Math.min(this.offset + fibonacciSequence[this.index - 1], n - 1);
            if (array[i] < value) {
                this.tooLowConsequence(i);
            } else if (array[i] > value) {
                this.tooHighConsequence();
            } else {
                return i;
            }
        }
        return -1;
    }

    validateInput(array, value) {
        if (!Array.isArray(array)) {
            throw new Error('First argument must be an array');
        }
        if (typeof value !== 'number') {
            throw new Error('Second argument must be a number');
        }
        if (array.length === 0) {
            return -1;
        }
        if (array.some(item => typeof item !== 'number')) {
            throw new Error('Array must contain only numbers');
        }
        return true;
    }

    generateFibonacciSequence(x) {
        if (x < 1) {
            throw new Error('Argument must be greater than 0');
        }
        let sequence = [0, 1];
        while (sequence[sequence.length - 1] < x) {
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        }
        return sequence;
    }

    tooLowConsequence(i){
        this.index -= 1;
        this.offset = i;
    }

    tooHighConsequence(){
        this.index -= 2;
    }
}

module.exports = {
    fibonacciSearch
};