let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits.length);

fruits.push("Orange");
console.log(fruits);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let item of fruits) {
  console.log(item);
}

let numbers = [10, 20, 30, 40, 50];

numbers.push(60);
console.log(numbers);

let total = 0;

for (let n of numbers) {
  total = total + n;
}

console.log(total);
