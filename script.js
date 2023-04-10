function generateTable() {
  const inputValues = document.getElementById("input-values").value.split(",");
  const cells = document.querySelectorAll('td');

  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = inputValues[i];
  }
}

document.querySelectorAll('td').forEach(cell => {
  cell.addEventListener('click', () => {
    cell.classList.toggle('active');
  });
});
