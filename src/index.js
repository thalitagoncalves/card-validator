import validator from './validator.js';

const submit = document.getElementById("validate")
const cardNumber = document.getElementById("card-number")

submit.addEventListener("click", (e) => {
  e.preventDefault
  console.log(validator.isValid(cardNumber.value))
})

