const person = {
  age: 25,
  gender: "Male",
  name: {
    firstName: "John",
    lastName: "Doe",
  },

  location: {
    nation: "Macedonia",
    city: "Kumanovo",
  },
  year: 2022,
  date: Date(),
  contact: {
    phone: "+389 70 222 111",
    Email: "bogdandimitrievski11@gmail.com",
  },
  fullName: function () {
    return this.name.firstName + " " + this.name.lastName;
  },
  placeOfLiving: function () {
    return this.location.nation + " " + this.location.city;
  },
};
person.fullName = person.fullName.toString();
person.placeOfLiving = person.placeOfLiving.toString();
const toString = JSON.stringify(person);
let checkPerson = [];

function objectToArray(obj) {
  for (let key in person) {
    obj.push([key, person[key]]);
  }
  return checkPerson;
}

console.log(objectToArray(checkPerson));

const arrList = ["Nick", "John", "Mike", "Don", "Set", "Broom"];
let objList = {};

function arrayToObject(array, object) {
  for (let i = 0; i < array.length; i++) {
    object[i] = array[i];
  }
  return object;
}
console.log(arrayToObject(arrList, objList));

function isEqual(object1, object2) {
  const ObjKeys1 = Object.keys(obj1);
  const ObjKeys2 = Object.keys(obj2);
  // if (ObjKeys1.length !== ObjKeys2.length) {
  //   return false;  // Ova da proveri dali ne se ednavki po dolzina...
  // }
  for (let i of ObjKeys1) {
    if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  name: "Marley",
  lastname: "McPhee",
  age: 30,
};

const obj2 = {
  name: "Marley",
  lastname: "McPhee",
  age: 30,
};
console.log(isEqual(obj1, obj2));
