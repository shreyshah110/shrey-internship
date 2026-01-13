function greet(name) {
  console.log("Hello " + name);
}

greet("Shrey");

function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);

function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 4));

let globalVar = 100;

function testScope() {
  let localVar = 50;
  console.log(globalVar);
  console.log(localVar);
}

testScope();

console.log(globalVar);

function checkValue(num) {
  if (num > 10) {
    let message = "Greater than 10";
    console.log(message);
  } else {
    let message = "Less than or equal to 10";
    console.log(message);
  }
}

checkValue(15);
checkValue(8);
