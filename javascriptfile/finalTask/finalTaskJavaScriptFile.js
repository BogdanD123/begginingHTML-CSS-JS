let friendOfList = document.getElementById("friends");
var titleFriends = document.createElement("h3");
friendOfList.appendChild(titleFriends);
titleFriends.innerHTML = "Friends";
var createdPicture = document.createElement("img");

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");
friendOfList.appendChild(div1);
div1.innerHTML = "Mary Swanson";
friendOfList.appendChild(div2);
div2.innerHTML = "Todd White";
friendOfList.appendChild(div3);
div3.innerHTML = "Ray Conneli";
friendOfList.appendChild(div4);
div4.innerHTML = "Don John";
friendOfList.appendChild(div5);
div5.innerHTML = "Mike Jack";
friendOfList.appendChild(div6);
div6.innerHTML = "Jackie Jackson";
titleFriends.style.color = "grey";

// function createE() {
//   let friendOfList = document.getElementById("friends");
//   let div = document.createElement("div");
//   friendOfList.appendChild(div);
//   div.innerHTML = "sdsa";
//   console.log("das");
// }
