const getNumber = document.getElementById("rec");
const input = document.querySelector("input");
const divResult = document.querySelector(".main");
const text = document.getElementById("text");
const checker = document.getElementById("checker");

const numbRandom = Math.floor(Math.random() * 100 + 1);
console.log(numbRandom);

getNumber.addEventListener("click", () => {
  const inputNumber = parseInt(input.value);
  text.innerHTML = inputNumber;
  if (Number.isNaN(inputNumber)) {
    text.innerText = "Not a valid number";
  }
  if (inputNumber < 1 || inputNumber > 100) {
    text.innerText = "Please enter the number between 1 and 100";
  }
  input.value = "";

  if (numbRandom == inputNumber) {
    checker.innerText = "Congrats thats the number we were looking for!";
  } else if (numbRandom > inputNumber) {
    checker.innerText = "Try higher number!";
  } else if (numbRandom < inputNumber) {
    checker.innerText = "Try lower number!";
  } else {
    checker.innerText = "";
  }
});
