const validator = {
  isValid: (cardNumber) => {
    let sumEven = 0
    let sumOdds = 0

    for(let index = 0; index <= cardNumber.length - 1; index++) {
      const currentNumber = Number(cardNumber[index])
      const isEven = index % 1 == 0
      const isOdd = index % 2 !== 0;
      
      if(isEven) {
        let double = currentNumber*2
        if (double > 9) {
          double -= 9
          sumEven += double
        } else {
          sumEven += double
        }
      }

      if(isOdd) {
        sumOdds += currentNumber
      }
    }
    const sumAllNumber = sumOdds + sumEven
    const isValidNumber = sumAllNumber % 10 === 0;
    return isValidNumber;
  }
};

export default validator;
