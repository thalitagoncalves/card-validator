const validator = {
  isValid: (cardNumber) => {
    let sumEven = 0
    let sumOdds = 0
    let stringToArr = cardNumber.split('').reverse()
    let reverseCardNumbers = stringToArr.join('')

    for(let index = 0; index <= cardNumber.length - 1; index++) {
      const currentNumber = Number(reverseCardNumbers[index])
      const isEven = index % 2 == 0
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
    console.log(sumOdds, sumEven, sumAllNumber)

    const isValidNumber = sumAllNumber % 10 === 0;
    return isValidNumber;
  }
};

export default validator;
