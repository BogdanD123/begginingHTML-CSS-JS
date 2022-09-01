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

let arr = [1, 5, 7, 12, 11];
let sum = 0;

function summary() {
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
}
console.log(summary());

const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = (arry) =>
  arry.filter((item, index) => arry.indexOf(item) !== index);
const duplicateElementa = toFindDuplicates(arry);
console.log(duplicateElementa);

let ar = [5, 4, 3, 2, 1, 1, 0];

console.log(ar);

ar.sort((a, b) => a - b);
console.log(ar);

let deletedNumbers = ar.filter((v, index) => {
  return ar.indexOf(v) === index;
});
console.log(deletedNumbers);
