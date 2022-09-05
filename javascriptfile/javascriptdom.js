let tableBody = document.getElementById("body");

document.body.children[0].insertRow(1);
document.body.children[0].insertRow(2);
document.body.children[0].rows[1].insertCell(0);
document.body.children[0].rows[2].insertCell(0);
document.head.nextElementSibling.children[1].children[0].style.background =
  "red";
document.head.nextElementSibling.children[1].children[1].style.background =
  "blue";
("blue");
document.head.nextElementSibling.children[1].children[2].style.background =
  "green";
("green");
document.head.nextElementSibling.children[1].children[3].style.background =
  "yellow";
("yellow");
document.head.nextElementSibling.children[1].children[4].style.background =
  "purple";
("purple");
document.getElementsByTagName("li")[0].style.color = "aquamarine";
document.getElementsByTagName("li")[1].style.color = "grey";
document.getElementsByTagName("li")[2].style.color = "violet";
document.getElementsByTagName("li")[3].style.color = "pink";
document.getElementsByTagName("li")[4].style.color = "brown";
function clickMe() {
  var v = document.getElementById("item1").value;
  console.log("Vrednosta na input poleto:", "" + v);
  var l = document.getElementById("item").firstElementChild;
  console.log("<li> Elementot sto treba da se pokaze vo console.log():", "", l);
}

// const collection = document.getElementsByTagName("li");  // Ovaa e nacin kako moze da se resi so ForLoop, no site odednas.
// for (let i = 0; i < collection.length; i++) {
//   collection[i].style.color = "darkblue";
// }
