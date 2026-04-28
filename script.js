function calculateTax() {
  let income = Number(document.getElementById("income").value);

  let annual = income * 12;
  let tax = 0;

  if (annual <= 600000) {
    tax = 0;
  } else if (annual <= 1200000) {
    tax = annual * 0.05;
  } else if (annual <= 2400000) {
    tax = annual * 0.1;
  } else {
    tax = annual * 0.15;
  }

  document.getElementById("result").innerHTML = `
    <b>Annual Income:</b> Rs ${annual}<br>
    <b>Estimated Tax:</b> Rs ${tax.toFixed(0)}<br>
    <b>Net Income:</b> Rs ${(annual - tax).toFixed(0)}
  `;
}
function shareWhatsApp() {
  let income = document.getElementById("income").value;

  let annual = income * 12;

  let tax = 0;

  if (annual <= 600000) {
    tax = 0;
  } else if (annual <= 1200000) {
    tax = annual * 0.05;
  } else if (annual <= 2400000) {
    tax = annual * 0.1;
  } else {
    tax = annual * 0.15;
  }

  let message =
`🇵🇰 Pakistan Tax Calculator 2025-26

💰 Monthly Income: Rs ${income}
📊 Estimated Tax: Rs ${tax.toFixed(0)}
🏦 Net Income: Rs ${(annual - tax).toFixed(0)}

Try it here:
👉 https://YOUR-LINK-HERE`;

  let url = "https://naar04.github.io/Pakistan-Tax-Calculator/" + encodeURIComponent(message);

  window.open(url, "_blank");
}
