function oneFunction(num1, num2, num3) {
  if (num3 === num2) {
    return false;
  } else if (num1 === num3) {
    return true;
  }
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
alert(oneFunction(5, "5", "9"));
let num1 = 5;
let num2 = "5";
let num3 = "9";

function modifiedFunction(number1, number2, number3) {
  if (number2 == number3) {
    return true;
  } else if (number1 == number3) {
    return true;
  }
  if (number1 == number2) {
    return true;
  } else {
    return false;
  }
}

alert(modifiedFunction());
let number1 = 5;
let number2 = "5";
let number3 = 9;

function monthFunction() {
  let month = prompt("Enter the months by numbers:");
  if (month == 1) {
    alert("31");
    monthFunction();
  } else if (month == 2) {
    let year = prompt("Enter the year");
    if (year % 4 != 0) {
      alert("28");
    } else if (year % 100 == 0) {
      if (year % 400 == 0) {
        alert("29");
      } else {
        alert("28");
      }
    } else {
      alert("29");
    }
  }
  if (month == 3) {
    alert("31");
  } else if (month == 4) {
    alert("30");
  }
  if (month == 5) {
    alert("31");
  } else if (month == 6) {
    alert("30");
  }
  if (month == 7) {
    alert("31");
  } else if (month == 8) {
    alert("31");
  }
  if (month == 9) {
    alert("30");
  } else if (month == 10) {
    alert("31");
  }
  if (month == 11) {
    alert("30");
  } else if (month == 12) {
    alert("31");
  } else {
    return "30";
  }
}

monthFunction();
