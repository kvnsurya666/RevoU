var operation = "";
var operand1 = 0;
var operand2 = 0;

function getInput(input) {
  if (operation === "") {
    operand1 = Number(operand1 + "" + input);
    document.getElementById("result").value = operand1;
  } else {
    operand2 = Number(operand2 + "" + input);
    document.getElementById("result").value = operand2;
  }
}

function clearInput() {
  operation = "";
  operand1 = 0;
  operand2 = 0;
  document.getElementById("result").value = "";
}

function deleteLast() {
  var result = document.getElementById("result").value;
  document.getElementById("result").value = result.substring(
    0,
    result.length - 1
  );
  if (operation === "") {
    operand1 = Number(document.getElementById("result").value);
  } else {
    operand2 = Number(document.getElementById("result").value);
  }
}

function getOperation(op) {
  operation = op;
}

function calculateResult() {
  var result = 0;
  if (operation === "+") {
    result = operand1 + operand2;
  } else if (operation === "-") {
    result = operand1 - operand2;
  } else if (operation === "*") {
    result = operand1 * operand2;
  } else if (operation === "/") {
    result = operand1 / operand2;
  }
  document.getElementById("result").value = result;
  operation = "";
}
