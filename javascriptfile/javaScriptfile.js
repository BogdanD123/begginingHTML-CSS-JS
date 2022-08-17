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

console.log("Objekt sto treba da se prikaze vo ConsoleLog", user);

let btn = document.getElementById("item1");
btn.addEventListener("click", function () {
  alert((my_age = age));
});
