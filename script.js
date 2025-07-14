
document.getElementById("financeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `📅 தேதி: ${date} <br> 💰 தொகை: ₹${amount} <br> ✍️ விவரம்: ${description}`;
});
