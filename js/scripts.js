// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// User interface logic 

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output1").text(result);
  });
});

$(document).ready(function() {
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#sub1").val());
    let number2 = parseInt($("#sub2").val());
    let result = subtract(number1, number2);
    $("#output2").text(result);
  });
});