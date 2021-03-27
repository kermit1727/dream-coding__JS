'use strict'

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

console.log('--------------------------------');

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'kermit' : value;
});
console.log(json);
console.log('---------------------------------');



// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const nObj = JSON.parse(json);
console.log(nObj);
console.log(typeof nObj.birthDate);
console.log(typeof rabbit.birthDate);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());

console.log('-----------------------------------');
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log('-----------------------------------');
console.log(obj);

console.log(obj.birthDate.getDate());
console.log(typeof obj.birthDate);
console.log(obj.birthDate);