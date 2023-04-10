// Get the table cells and input field
const cells = document.querySelectorAll('td');
const input = document.querySelector('input');

// List of default values
const defaultValues = ['Danologue', 'IIWII', 'Ally', 'Talking Over ERich', 'Peter Waxes Philosphical', 'Well Im Broken', 'Matios Joins', 'Regulating AI', 'Overton Window', 'Python', 'Right!?', 'Evil Manish', 'Alli Bio Fact', 'Unneccessary Bye', 'Zach Disagrees', 'ERich Introduces Friend', 'Crow Crows', 'Dan Club', 'Alaskoshi Alaskoshis', 'Ello Aw Waw Wii', 'Room Rugged'];

// Shuffle array and return a random subset of n values
function getRandomValues(values, n) {
  const shuffled = values.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Populate cells with shuffled values
function populateCells(values) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = values[i];

    cells[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
}

// Listen for user input and generate table on button click
document.querySelector('button').addEventListener('click', () => {
  const userInput = input.value.trim().split(',').map(value => value.trim());

  // Use default values if user input is empty or invalid
  const values = userInput.length > 0 && userInput[0] !== '' ? getRandomValues(userInput, 9) : getRandomValues(defaultValues, 9);

  populateCells(values);
});

// Listen for cell click events
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    cell.classList.toggle('pressed');
  });
});

// Shuffle array in place
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle default values array on page load
shuffle(defaultValues);
