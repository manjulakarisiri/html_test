
// Get display input
const display = document.getElementById('display');

// Add input to display
function append(value) {
  display.value += value;
}

// Clear all input
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate final result
function calculate() {
  try {
    const expression = display.value.replace(/%/g, '/100');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}

// Square root
function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

// Square current value
function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = 'Error';
  }
}

// Cube current value
function cube() {
  try {
    display.value = Math.pow(eval(display.value), 3);
  } catch {
    display.value = 'Error';
  }
}

// x power y
function power() {
  append('**');
}

// Toggle light/dark theme
function toggleTheme() {
  document.body.classList.toggle('light');
}

// Support keyboard keys
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[0-9+\-*/.%()]/.test(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});