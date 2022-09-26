var archive = [
  { author: "Joyce Meyer", title: "Minds Battlefield", archiveID: 1254 },
  {
    author: "Neil T. Anderrson",
    title: "Victory Over Darkness",
    archiveID: 14,
  },
  { author: "Anton Panov", title: "Veronika Samarak", archiveID: 123 },
  { author: "Risto Krle", title: "Parite se Otepuvacka", archiveID: 144 },
  { author: "Igor Dzambazov", title: "Gol Covek", archiveID: 1254 },
];

const library = archive.map((item) => item.title).sort();

console.log(library);
var authors = archive.map((item) => item.author);
console.log(authors);

var authorsID = archive.filter((item) => item.archiveID == 1254);
console.log(authorsID);

class Car {
  constructor(brand, year, horsepower) {
    this.brand = brand;
    this.year = year;
    this.horsepower = horsepower;
  }

  yearOfCar() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }

  usersForCars(age) {
    if (age >= 25) {
      return "He can drive any car";
    } else if (age < 25) {
      return "He can drive only 105hp";
    }
  }
}

let usersCar1 = new Car("Toyota", 2014, "80");
let usersCar2 = new Car("Citroen", 2016, "105");
let usersCar3 = new Car("Mazda", 2020, "200");

console.log(
  usersCar1,
  usersCar1.yearOfCar(),
  usersCar2,
  usersCar2.yearOfCar(),
  usersCar3,
  usersCar3.yearOfCar()
);

let users = [
  { name: "John", surname: "Johnson", age: 33 },
  { name: "Sandy", surname: "Sandyson", age: 15 },
  { name: "Jane", surname: "Jason", age: 18 },
];

let user1 = new Car().usersForCars(33);
let user2 = new Car().usersForCars(15);
let user3 = new Car().usersForCars(18);
console.log(
  ("John Johnson:", ""),
  user1 + "",
  ("Sandy Sandyson:", "\n"),
  user2 + "",
  ("Jane Jason:", "\n"),
  user3
);
