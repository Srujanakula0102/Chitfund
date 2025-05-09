
function generateSchedule() {
  const principal = parseFloat(document.getElementById('principal').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
  const saving = parseFloat(document.getElementById('saving').value);
  const monthlyRepay = parseFloat(document.getElementById('monthlyRepay').value);

  if (isNaN(principal) || isNaN(interestRate) || isNaN(saving) || isNaN(monthlyRepay)) {
    alert("Please enter all values correctly.");
    return;
  }

  let balance = principal;
  let month = 1;
  let html = `<table>
    <tr>
      <th>Month</th>
      <th>Remaining Principal</th>
      <th>Interest</th>
      <th>Principal Paid</th>
      <th>Saving</th>
      <th>Total Payment</th>
    </tr>`;

  while (balance > 0) {
    const interest = parseFloat((balance * interestRate).toFixed(2));
    const principalPayment = balance >= monthlyRepay ? monthlyRepay : balance;
    const totalPayment = principalPayment + interest + saving;

    html += `<tr>
      <td>${month}</td>
      <td>₹${balance.toFixed(2)}</td>
      <td>₹${interest.toFixed(2)}</td>
      <td>₹${principalPayment.toFixed(2)}</td>
      <td>₹${saving.toFixed(2)}</td>
      <td>₹${totalPayment.toFixed(2)}</td>
    </tr>`;

    balance -= principalPayment;
    month++;
  }

  // After principal is cleared, still saving continues
  html += `<tr>
    <td>${month}</td>
    <td>₹0.00</td>
    <td>₹0.00</td>
    <td>₹0.00</td>
    <td>₹${saving.toFixed(2)}</td>
    <td>₹${saving.toFixed(2)}</td>
  </tr>`;

  html += `</table>`;
  document.getElementById('result').innerHTML = html;
}
