/**
 *
 *A class containing method for summing and multiplying parameters.
 * @class Calculator
 */
 class Calculator {
    constructor() {
    };
    /**
     *
     *
     * @param {Array<Number>} theArgs array of numbers for summing
     * @return {Number} sum of numbers
     * @memberof Calculator
     */
    sum(...theArgs) {
        let result = 0;
        for (let i = 0; i < theArgs.length; i++) {
          result += Number(theArgs[i]);
        }
        return result;
    };
    /**
     *
     *
     * @param {Array<Number>} theArgs array of numbers for multiplication
     * @return {Number}
     * @memberof Calculator
     */
     multiplication(...theArgs) {
        let result = 1;
        for (let i = 0; i < theArgs.length; i++) {
          result = result * Number(theArgs[i]);
        }
        return result;
    };
    
    subtraction(reduced, subtrahend) {
        return Number(reduced) - Number(subtrahend);
    }

    divide(dividend, divider) {
        return Number(dividend) / Number(divider);
    }

    squaring(number) {
        return Number(number) * Number(number);
    }
  };
  
  module.exports = { Calculator };