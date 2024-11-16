
const result = document.getElementById("result");
const calculate = (operation) => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Invalid input";
    return;
  }
  if (operation === "add") result.textContent = num1 + num2;
  if (operation === "subtract") result.textContent = num1 - num2;
  if (operation === "multiply") result.textContent = num1 * num2;
  if (operation === "divide") result.textContent = num1 / num2;
};
document
  .getElementById("add")
  .addEventListener("click", () => calculate("add"));
document
  .getElementById("subtract")
  .addEventListener("click", () => calculate("subtract"));
document
  .getElementById("multiply")
  .addEventListener("click", () => calculate("multiply"));
document
  .getElementById("divide")
  .addEventListener("click", () => calculate("divide"));
