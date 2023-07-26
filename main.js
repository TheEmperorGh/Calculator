let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentExpression += operator;
  updateDisplay();
}

function appendDecimal() {
  if (currentExpression !== '' && !currentExpression.includes('.')) {
    currentExpression += '.';
  } else if (currentExpression === '') {
    currentExpression = '0.';
  }
  updateDisplay();
}

function clearDisplay() {
  currentExpression = '';
  updateDisplay();
}

function deleteLastChar() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentExpression;
}

function calculate() {
  try {
    currentExpression = eval(currentExpression);
    updateDisplay();
  } catch (error) {
    currentExpression = 'Error';
    updateDisplay();
  }
}

function inverse() {
  currentExpression = `1/(${currentExpression})`;
  calculate();
}

function pi() {
  currentExpression += Math.PI;
  updateDisplay();
}
