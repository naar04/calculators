function calculateTax() {
  let income = Number(document.getElementById("income").value);

  // Validation
  if (!income || income <= 0) {
    document.getElementById("result").innerHTML =
      "⚠️ Please enter a valid monthly income";
    return;
  }

  let annual = income * 12;
  let tax = 0;

  // Simple slab logic (you can refine later with real FBR rules)
  if (annual <= 600000) {
    tax = 0;
  } else if (annual <= 1200000) {
    tax = annual * 0.05;
  } else if (annual <= 2400000) {
    tax = annual * 0.10;
  } else {
    tax = annual * 0.15;
  }

  let netIncome = annual - tax;

  document.getElementById("result").innerHTML = `
    <b>Annual Income:</b> Rs ${annual.toLocaleString()}<br>
    <b>Estimated Tax:</b> Rs ${tax.toFixed(0).toLocaleString()}<br>
    <b>Net Income:</b> Rs ${netIncome.toFixed(0).toLocaleString()}
  `;
}


// 🌐 WhatsApp Viral Sharing Function
function shareWhatsApp() {
  let income = Number(document.getElementById("income").value);

  if (!income || income <= 0) {
    alert("Please calculate tax first by entering income.");
    return;
  }

  let annual = income * 12;
  let tax = 0;

  if (annual <= 600000) {
    tax = 0;
  } else if (annual <= 1200000) {
    tax = annual * 0.05;
  } else if (annual <= 2400000) {
    tax = annual * 0.10;
  } else {
    tax = annual * 0.15;
  }

  let message =
`🇵🇰 Pakistan Tax Calculator 2025-26

💰 Monthly Income: Rs ${income}
📊 Annual Income: Rs ${annual}
💸 Estimated Tax: Rs ${tax.toFixed(0)}
🏦 Net Income: Rs ${(annual - tax).toFixed(0)}

Try it here:
👉 https://your-link-here`;

  let url = "https://naar04.github.io/Pakistan-Tax-Calculator/" + encodeURIComponent(message);

  window.open(url, "_blank");
}
