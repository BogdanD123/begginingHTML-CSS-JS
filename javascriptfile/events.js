let inputs = document.querySelectorAll(".items");
console.log(inputs);

function onSubmit() {
  let n = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      n++;
    }
  }
  if (n != 0) {
    alert("Please fullfil the fields ");
  } else {
    alert("OK");
  }
}

// function onChange() {
//   console.log(document.querySelectorAll("input").value);
// }

let num = 0;

function onClick() {
  document.getElementById("clickedDiv").innerHTML = num++;
  console.log(num);
}
function clickedIn() {
  num = 0;
  document.getElementById("clickedDiv").innerHTML = num;
}

// var x = document.getElementById("blurForm");
// x.addEventListener('keypress', myBlurFunction, true);

let input1 = document.getElementById("item1").value;
let input2 = document.getElementById("item2").value;
let input3 = document.getElementById("item3").value;
let input4 = document.getElementById("item4").value;
let input5 = document.getElementById("item5").value;
let div1 = document.getElementById("blurDiv1");
let div2 = document.getElementById("blurDiv2");
let div3 = document.getElementById("blurDiv3");
let div4 = document.getElementById("blurDiv4");
let div5 = document.getElementById("blurDiv5");

function firstInput() {
  if (input1 == "") {
    div1.innerHTML = "Please fullfill this field";
  } else {
    onKeyPress();
  }
}
function secondInput() {
  if (input2 == "") {
    div2.innerHTML = "Please fullfill this field";
  }
}
function thirdInput() {
  if (input3 == "") {
    div3.innerHTML = "Please fullfill this field";
  }
}
function forthInput() {
  if (input4 == "") div4.innerHTML = "Please fullfill this field";
}
function fifthInput() {
  if (input5 == "") {
    div5.innerHTML = "Please fullfill this field";
  }
}

// let div1 = document.getElementById("blurDiv1");

// function myBlurFunction(d) {
//   if (input1 == "") {
//     return (document.createElement("div").innerHTML = "sdsa");
//   }
// if (input2 == "") {
//   div2.innerText = "Please fulfill the field";
// }
// if (input3 == "") {
//   div3.innerText = "Please fulfill the field";
// }
// if (input4 == "") {
//   div4.innerText = "Please fulfill the field";
// }
// if (input5 == "") {
//   div5.innerText = "Please fulfill the field";
// }
