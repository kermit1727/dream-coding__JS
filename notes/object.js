'use strict';
// Objects;
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const kermit = {name: 'kermit', age: 23};
print(kermit);

// with JavaScript magic (dynamically typed language)
// can add properties later
kermit.hasJob = true;
console.log(kermit.hasJob);

// can delete properties later
delete kermit.hasJob;
console.log(kermit.hasJob);



// 2. Computed properties
// key should be always string
console.log(kermit.name);
console.log(kermit['name']);
kermit['hasJob'] = true;
console.log(kermit.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(kermit, 'name');
printValue(kermit, 'age');



// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('kermit', 23);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}



// 5. in operator: property existence check (key in obj)
console.log('name' in kermit);
console.log('age' in kermit);
console.log('random' in kermit);
console.log(kermit.random);



// 6. for..in VS for..of
// for (key in obj)
console.clear();
for (let key in kermit) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}



// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'kermit', age: '20'};
const user2 = user;
console.log(user);
console.log(user2);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.siez);