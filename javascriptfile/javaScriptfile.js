let firstName = "Bogdan";
let age = 24;
let jobTitle = "nevraboten";
let gender = "male";
let liveInSkopje = false;
let variable = undefined;

let user = {
  my_name: firstName,
  my_age: age,
  my_jobTitle: jobTitle,
  my_gender: gender,
  my_liveInSkopje: liveInSkopje,
};

function buttonClick(objekt) {
  alert(objekt);
}

buttonClick(my_age);
buttonClick(my_jobTitle);
buttonClick(my_gender);

// console.log("Objekt sto treba da se prikaze vo ConsoleLog", user);

// let btn = document.getElementById("item1");
// btn.addEventListener("click", function () {
//   alert((my_age = age));
// });
async function fetchText() {
  await fetch("https:/ / fakestoreapi.com / products")
    .then((repsonse) => repsonse.text())
    .then((data) => console.log(data));
}
