const buttonValue = document.querySelectorAll("#button");
const displayCalc = document.querySelector("#displayNumber");
const resultat = document.querySelector("#submitButton");
const errorText = document.querySelector("#errorText");
const deletCalc = document.querySelector("#deletCalc");

buttonValue.forEach((button) => {
  button.addEventListener("click", () => {
    displayCalc.value += button.value;
  });
});

resultat.addEventListener("click", () => {
  try {
    let expression = displayCalc.value;
    let result = eval(expression);
    displayCalc.value = result;
  } catch {
    errorText.textContent = `Le calcul n'est pas valide`;
    errorText.style.color = "red";
  }
});

deletCalc.addEventListener("click", () => {
  displayCalc.value = "";
});
