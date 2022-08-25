let arr = [1221, 2333, 3222, 411, 545, 6];
let splicedNumber = 2333;
function removeNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[(i, 1)] == number) {
      console.log(arr, splicedNumber);
      array.splice(i, 1);
    }
  }
  return array;
}
console.log(removeNumber(arr, splicedNumber));

let niza = [231, 21111, 2333, 22];
let number = 0;
for (let i = 0; i < niza.length; i++) {
  if (number < niza[i]) {
    number = niza[i];
  }
}

console.log(number);
const number1 = 1112211;

while (number1 > 0) {
  const digits = (number1, count = 0) => {
    if (number1) {
      return digits(Math.floor(number1 / 10), ++count);
    }
    return count;
  };
  console.log(digits(number1));

  break;
}
