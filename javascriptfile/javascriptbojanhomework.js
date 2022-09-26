// 1 . Da se napravi funkcija koja kje presmetuva zbir od elementi vo niza
// da raboti za bilo koja niza
// nizata e [1,5, 7, 12 ,10 ,]
// pr 35
// hit : for loop

// 2 . Da se napravi funkcija koja kje ni dade koi broevi se duplikati vo niza
// da raboti za bilo koja niza
// niza [ 1 ,2 ,3 ,1, 5, 6,2 ]
// pr : [1 ,2 ]

// 3 . Da se podredat po redosled elementite vo nizata
// da raboti za bilo koja niza
// niza [ 5,3,3,2,1,0]
// pr : [0,1,2,3,3,5]
// posle toa da se izbrisat duplikatite...
// pr [0,1,2,3,5]

// let arr = [1, 5, 7, 12, 11];
// let sum = 0;

// function summary() {
//   arr.forEach(function (element) {
//     sum += element;
//   });
//   return sum;
// }
// console.log(summary());

// const arry = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = (arry) =>
//   arry.filter((item, index) => arry.indexOf(item) !== index);
// const duplicateElementa = toFindDuplicates(arry);
// console.log(duplicateElementa);

// let ar = [5, 4, 3, 2, 1, 1, 0];

// console.log(ar);

// ar.sort((a, b) => a - b);
// console.log(ar);

// let deletedNumbers = ar.filter((v, index) => {
//   return ar.indexOf(v) === index;
// });
// console.log(deletedNumbers);

// https://fakestoreapi.com/products
// async function fetchText() {
//   await fetch("https://fakestoreapi.com/products?limit=5")
//     .then((repsonse) => repsonse.json())
//     .then((data) => console.log(data));
// }
// fetchText();
const apiUrls = {
  // here I get all the products
  products: `https://fakestoreapi.com/products`,
  // here i get all the categorys
  category: "https://fakestoreapi.com/products/categories",
};
const div = document.getElementById("apiInfo");

const title = document.getElementById("title");
const image = document.getElementById("image");
const desc = document.getElementById("desc");
const rating = document.getElementById("rating");

async function getData(url) {
  let result = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return result;
}

function renderScreen() {
  getData(apiUrls.products).then((res) => {
    res.forEach((element) => {
      //   let elem = document.createElement("div");
      //   elem.innerHTML = element.title;
      //   div.appendChild(elem);

      //main div
      let elem = document.createElement("div");
      elem.classList.add("container", "display-f-c-c");

      //title div
      let titleNew = document.createElement("div");
      titleNew.classList.add("title", "margin-15-auto", "display-f-c-c");
      titleNew.innerHTML = element.title;
      elem.appendChild(titleNew);

      //image
      let imageNew = document.createElement("img");
      imageNew.classList.add(
        "image",
        "margin-15-auto",
        "height-200-width-300",
        "display-f-c-c"
      );
      imageNew.src = element.image;
      elem.appendChild(imageNew);

      //desc
      let descText = document.createElement("article");
      descText.classList.add(
        "title",
        "margin-15-auto",
        "height-200-width-300",
        "display-f-c-c"
      );
      descText.innerHTML = element.description;
      elem.appendChild(descText);

      let ratingType = (ratingType = document.createElement("article"));
      ratingType.classList.add("rating", "margin-15-auto", "display-f-c-c");
      ratingType.innerText = element.rating.elem.appendChild(ratingType);

      //final step
      console.log("tuka sum ");
      div.appendChild(elem);
    });
  });
}

renderScreen();
