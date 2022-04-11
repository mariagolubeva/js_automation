const { Calculator } = require('../calculator');

const calculator = new Calculator();

describe('Sum test suite', () =>{
    it(`Type of the sum result should be number`, async() => {
        const result = calculator.sum(1,5,6);
        expect(typeof result).toEqual('number');
    });

    it(`The result of sum should be correct`, async() => {
        const result = calculator.sum(1, 2, 3, 4);
        expect(result).toEqual(10);
    });

    it(`The strings should be converted to numbers and the result of sum should be correct`, async() => {
        const result = calculator.sum('4', '5', 10, 12);
        expect(result).toEqual(31);
    });

    it(`The result of sum of negative numbers should be correct`, async() => {
        const result = calculator.sum(-1, 2, -3, -4);
        expect(result).toEqual(-6);
    });

    it(`The sum should be impossible for strings with not only numbers inside`, async() => {
        const result = calculator.sum('Maria', '5', 10, 12);
        expect(result).toEqual("Impossible to sum strings");
    });
})

describe('Multiplication test suite', () =>{
    it(`Type of the multiplication result should be number`, async() => {
        const result = calculator.multiplication(1,5,6);
        expect(typeof result).toEqual('number');
    });

    it(`The result of multiplication should be correct`, async() => {
        const result = calculator.multiplication(1, 2, 3, 4);
        expect(result).toEqual(24);
    });

    it(`The strings should be converted to numbers and the result of multiplication should be correct`, async() => {
        const result = calculator.multiplication('1', '2', 10, 12);
        expect(result).toEqual(240);
    });

    it(`The result of multiplication of negative numbers should be correct`, async() => {
        const result = calculator.multiplication(-1, 2, -3, -4);
        expect(result).toEqual(-24);
    });

    it(`The multiplication should be impossible for strings with not only numbers inside`, async() => {
        const result = calculator.multiplication('Maria', '5', 10, 12);
        expect(result).toEqual("Impossible to multiply strings");
    });
})

describe('Subtraction test suite', () =>{
    it(`Type of the subtraction result should be number`, async() => {
        const result = calculator.subtraction(10, 9);
        expect(typeof result).toEqual('number');
    });

    it(`The result of subtraction should be correct`, async() => {
        const result = calculator.subtraction(10, 6);
        expect(result).toEqual(4);
    });

    it(`The strings should be converted to numbers and the result of subtraction should be correct`, async() => {
        const result = calculator.subtraction('9', 2);
        expect(result).toEqual(7);
    });

    it(`The result of subtraction of negative numbers should be correct`, async() => {
        const result = calculator.subtraction(-1, -4);
        expect(result).toEqual(3);
    });

    it(`The subtraction should be impossible for strings with not only numbers inside`, async() => {
        const result = calculator.subtraction('Maria', 12);
        expect(result).toEqual("Impossible to substract strings");
    });
})

describe('Divide test suite', () =>{
    it(`Type of the divide result should be number`, async() => {
        const result = calculator.divide(4,2);
        expect(typeof result).toEqual('number');
    });

    it(`The result of divide should be correct`, async() => {
        const result = calculator.divide(10, 2);
        expect(result).toEqual(5);
    });

    it(`The strings should be converted to numbers and the result of divide should be correct`, async() => {
        const result = calculator.divide('12', 2);
        expect(result).toEqual(6);
    });

    it(`The result of divide of negative numbers should be correct`, async() => {
        const result = calculator.divide(-8, -4);
        expect(result).toEqual(2);
    });

    it(`The divide should be impossible for strings with not only numbers inside`, async() => {
        const result = calculator.divide('Maria', 12);
        expect(result).toEqual("Impossible to divide strings");
    });
})

describe('Squaring test suite', () =>{
    it(`Type of the squaring result should be number`, async() => {
        const result = calculator.squaring(4);
        expect(typeof result).toEqual('number');
    });

    it(`The result of squaring should be correct`, async() => {
        const result = calculator.squaring(4);
        expect(result).toEqual(16);
    });

    it(`The string should be converted to number and the result of squaring should be correct`, async() => {
        const result = calculator.squaring('12');
        expect(result).toEqual(144);
    });

    it(`The result of squaring of negative number should be correct`, async() => {
        const result = calculator.squaring(-8);
        expect(result).toEqual(64);
    });

    it(`The squaring should be impossible for string with not only numbers inside`, async() => {
        const result = calculator.squaring('Maria');
        expect(result).toEqual("Impossible to square string");
    });
})