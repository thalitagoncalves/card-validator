import validator from './validator.js';

const submit = document.getElementById("validate")
const cardNumber = document.getElementById("card-number")

submit.addEventListener("click", () => {
  console.log(validator.isValid(cardNumber.value))
})

