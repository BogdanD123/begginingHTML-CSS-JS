// let arr2 = [121, 2333, 1, 21, 21, 21, 21]; // navedena kako primer za reusable funciton => console.log(array, number)
let arr = [1221, 2333, 3222, 411, 545, 6];
let splicedNumber = 2333;
function removeNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
      console.log(array, number); // Za ova tuka se misli reusable
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
