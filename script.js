const cells = document.querySelectorAll('td');
let values = [];

function generateBingoCard() {
  const input = document.getElementById('words').value;
  values = input.split(',').map(word => word.trim());
  shuffle(values);
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = values[i];
    cells[i].classList.remove('pressed');
    cells[i
