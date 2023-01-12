document
  .getElementById("calculate")
  .addEventListener("click", calcCompoundInterest);

function calcCompoundInterest() {
  const value = document.getElementById("value").value;
  const fee = document.getElementById("fee").value / 100;
  const time = document.getElementById("time").value;

  let total = value * (1 + fee) ** time;

  total = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  document.getElementById("total").innerHTML = total;
}
