function greet(name) {
  console.log("Hello " + name);
}

greet("Shrey");

function add(a, b) {
  return a + b;
}

let sum = add(10, 25);
console.log(sum);

function square(n) {
  return n * n;
}

console.log(square(6));

let globalValue = 100;

function testScope() {
  let localValue = 50;
  console.log(globalValue);
  console.log(localValue);
}

testScope();
console.log(globalValue);

function checkNumber(n) {
  if (n > 10) {
    let msg = "Greater than 10";
    console.log(msg);
  } else {
    let msg = "Less than or equal to 10";
    console.log(msg);
  }
}

checkNumber(15);
checkNumber(5);
