document.getElementById('betting-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const team = document.getElementById('team').value;
  const amount = document.getElementById('amount').value;
  const resultElement = document.getElementById('bet-result');

  // Simulate a simple win/lose logic
  const randomOutcome = Math.random() < 0.5 ? 'win' : 'lose';

  if (randomOutcome === 'win') {
    resultElement.textContent = `Congratulations! ${team} won and you doubled your bet to ${amount * 2}!`;
  } else {
    resultElement.textContent = `Sorry, ${team} lost and you lost your bet of ${amount}.`;
  }
});
