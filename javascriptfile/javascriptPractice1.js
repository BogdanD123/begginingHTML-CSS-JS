// // variable1 = liveInSkopje == true ? "bela mecka" : "grizli";
// // console.log(variable1);

// // let dayOfBirth = 27;
// // let monthOfBirth = 2
// // let yearMinusing = 98 - 19;
// // let plusNumberOfTheYear = 1 + 9 + 9 + 8;

// // let var1 = dayOfBirth > monthOfBirth ? true : false;
// // let var2 = yearMinusing / plusNumberOfTheYear

// // function isNumberEven(broj) {
// //   if (broj % 2 == 0) {
// //     console.log("paren");
// //   } else {
// //     console.log("neparen");
// //   }
// // }
// // isNumberEven();
// function yourAge();

// let age1 = prompt('tuka stojat godini');
// console.log(age1)
// // let value = false;
// // alert(typeof value); //.This type is Boolean

// // value = String(value);
// // alert(typeof value);

// // let value = "false";
// // alert(typeof value); //.This type is String

// // value = Boolean(value);
// // alert(typeof value);

// // let num1 = 15;

// // console.log(++num1);

// let number = 15;

// // console.log(number % 6);
// let fisrtNumber = 15;
// let secondNumber = "15";
// let thirdNumber = "1234";
// let stringNumber = Number(secondNumber);

// let rezultat = 10 != Number(thirdNumber / secondNumber);
// console.log(rezultat);

// let num1 = 2;
// let num2 = 3;
// let num3 = 5;

// function result(a, b) {
//   a + b;
// }

// result(num1, result(a + b));

// let broj1 = 1;
// let broj2 = 2;
// let broj3 = 2;
// let broj4 = 10;
// let broj5 = 100;

// function zbir(a, b) {
//   return a + b;
// }
// zbir(broj1, broj2);

// function odzemanje(v, g) {
//   return v - g;
// }

// odzemanje(broj, broj5);

// function mnozenje(d, z) {
//   return d * z;
// }
// mnozenje();
// mnozenje(broj3, broj4);
// function delenje(e, i) {
//   return;
// // }

// let user1 = "Tosho";
// let user2 = "Nikola";
// let user3 = "Milan";
// let user4 = "Stefan";

// function oneFunction() {
//   if (user1 == "Tosho") {
//     return "admin";
//   } else {
//     return "ne e admin";
//   }
// }
// alert(oneFunction);
// console.log(oneFunction(user1));

// let user = ["L", "u", "k", "a", " ", "D", "o", "n", "c", "i", "c"];
// console.log(user.join(""));
// let user2 = [C, o, d, e, , A, c, a, d, e, m, y];
// let user3 = [I, n, , c, o, d, e, , w, e, , t, r, u, s, t];

// let user = [123, 123, 123, 233, 3555, 4545, 654, 123];

// console.log(user.filter((niza) => niza === 123).length);
// let arr = [
//   { name: "John", address: { street: "avenue 2", number: 23 } },
//   { name: "Doe", address: { street: " avenue 1", number: 23 } },
//   { name: "Luka", address: { street: "avenue 5 ", number: 22 } },
//   { name: "Jovan", address: { street: "avenue 2", number: 12 } },
//   { name: "Angel", address: { street: " avenue 4", number: 3 } },
//   { name: "Kristijan", address: { street: "avenue 2", number: 23 } },
// ];

async function fetchText() {
  await fetch("https://fakestoreapi.com/products?limit=5")
    .then((repsonse) => repsonse.json())
    .then((data) => console.log(data));
}

fetchText();

function getApiInfo() {
  fetchText().then((res) => console.log(res));
}
