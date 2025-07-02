let input = document.getElementById('input');
let history = document.getElementById('history');
let memory = 0;
let lastCalculation = '';


function appendValue(val) {
  input.value += val;
}


function appendOperation(op) {
  const lastChar = input.value.slice(-1);
  if ('+-*/%.'.includes(lastChar)) return;
  input.value += op;
}


function clearInput() {
  input.value = '';
}


function calculate() {
  try {
    const result = math.evaluate(input.value);
    lastCalculation = `${input.value} = ${result}`;
    history.innerText = lastCalculation;
    input.value = result;
  } catch (e) {
    alert("Invalid expression");
  }
}


function square() {
  if (input.value) {
    try {
      const val = math.evaluate(input.value);
      input.value = math.pow(val, 2);
    } catch {
      alert("Invalid input for squaring");
    }
  }
}


function squareRoot() {
  if (input.value) {
    try {
      const val = math.evaluate(input.value);
      input.value = math.sqrt(val);
    } catch {
      alert("Invalid input for square root");
    }
  }
}


function memoryAdd() {
  memory += parseFloat(input.value) || 0;
}

function memorySubtract() {
  memory -= parseFloat(input.value) || 0;
}

function memoryRecall() {
  input.value += memory;
}

function memoryClear() {
  memory = 0;
}


document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (e.key === "Escape") {
    clearInput();
  }
});
