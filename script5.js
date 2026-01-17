let a = 12;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a <= b);

let x = 20;
let y = 8;

console.log(x > 10 && y > 5);
console.log(x > 10 || y > 10);
console.log(!(x < 10));

let marks = 78;

if (marks >= 85) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}
