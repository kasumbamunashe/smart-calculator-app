let input = document.getElementById('input');
let history = document.getElementById('history');
let memory = 0;
let lastCalculation = '';

function appendValue(val) {
  input.value += val;
}

function appendOperation(op) {
  const lastChar = input.value.slice(-1);
  if ('+-*/%'.includes(lastChar)) return; // prevent duplicate operators
  input.value += op;
}

function clearInput() {
  input.value = '';
}

function calculate() {
  try {
    const result = eval(input.value);
    lastCalculation = `${input.value} = ${result}`;
    history.innerText = lastCalculation;
    input.value = result;
  } catch (e) {
    alert("Invalid expression");
  }
}


});
