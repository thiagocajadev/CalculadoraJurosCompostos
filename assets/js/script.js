function validateCurrency() {
  let input = this;
  let regex = /^[0-9]+(\.[0-9]+)?$/;
  if (!regex.test(input.value)) {
    input.value = input.value.slice(0, -1);
  }
}

let inputs = document.getElementsByClassName("validateNumber");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", validateCurrency);
}

function formatNumber(num) {
  if (!isFinite(num)) {
    return "&infin;";
  }
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(1) + "T";
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  return num.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function calcCompoundInterest() {
  // valor inicial do investimento
  const value = parseFloat(document.getElementById("value").value);
  // valor do aporte mensal
  const contribution = parseFloat(
    document.getElementById("contribution").value
  );
  // taxa de juros aplicada ao investimento (em formato decimal)
  const fee = parseFloat(document.getElementById("fee").value / 100);
  // período de tempo em que os juros são acumulados (em meses)
  const time = parseFloat(document.getElementById("time").value);

  let total = value;
  for (let i = 1; i <= time; i++) {
    // Aplica a taxa de juros ao total
    total *= 1 + fee;
    // Adiciona a contribuição mensal ao total
    total += contribution;
  }

  total = formatNumber(total);
  document.getElementById("total").innerHTML = total;
}

document
  .getElementById("calculate")
  .addEventListener("click", calcCompoundInterest);
