// Get the table cells and the generate button
var cells = document.querySelectorAll('td');
var generateButton = document.getElementById('generate-button');

// Add an event listener to the generate button
generateButton.addEventListener('click', function() {
  var inputValues = document.getElementById('input-values').value;
  var values = inputValues.split(',').map(function(value) {
    return value.trim();
  });

  // Shuffle the array and select a random subset of 9 values
  var shuffledValues = shuffle(values).slice(0, 9);

  // Fill the cells with the selected values
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = shuffledValues[i];
    cells[i].classList.remove('active');
  }
});

// Add an event listener to each cell
cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      this.classList.add('active');
    }
  });
});

// Shuffle the array
function shuffle(array) {
  var currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}
