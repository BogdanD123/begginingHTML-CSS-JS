let name = "Bogdan";
let age = 24;
let jobTitle = "nevraboten";
let gender = "male";
let liveInSkopje = false;

let user = {
  name: "Bogdan",
  age: 24,
  jobTitle: "nevraboten",
  gender: "male",
  liveInSkopje: false,
};
debugger;
console.log("Objekt sto treba da se prikaze vo ConsoleLog", user);

let btn = document.getElementById("item1");
btn.addEventListener("click", function () {
  alert("bogdan, 24, nevraboten, male, false");
});
