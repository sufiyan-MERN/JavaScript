// const printPattern = () => {
//   for (let i = 0; i <= 4; i++) {
//     for (let j = 0; j <= i; j++) {
//       console.log("*", j);
//     }
//   }
// };
// printPattern();

// function studentInfo(name, age, course) {
//   console.log(name);
//   console.log(age);
//   console.log(course);
// }
// studentInfo("john doe", 19, "javascript");

// function findLargest(a, b) {
//   return Math.max(a, b);
// }
// let max = findLargest(10, 25);
// console.log(max);

// function calculate() {
//   let result = 100;
//   console.log(result);
// }
// calculate();

// function outer() {
//   let message = "hello";
//   function inner() {
//     console.log(message);
//   }
//   inner();
// }
// outer();

// function executeOperation(add, multiply) {
//   add();
//   multiply();
// }
// const add = (a, b) => {
//   return a + b;
// };
// const muliply = (a, b) => {
//   return a * b;
// };
// console.log(executeOperation(5, 3));

// function repeat(fn, n) {
//   for (let i = 0; i < n; i++) {
//     fn();
//   }
// }
// function greet() {
//   console.log("hello");
// }
// repeat(greet, 4);

// const students = {
//   name: "alice",
//   marks: [22, 55, 24, 76],
//   getAverage() {
//     let sum = 0;
//     for (const avg of this.marks) {
//       sum += avg;
//     }
//     return sum / this.marks.length;
//   },
// };
// console.log(students.getAverage());

// let redtriangle = {
//   length: 10,
//   width: 5,
//   getArea() {
//     let area = this.length * this.width;
//     return area;
//   },
//   getPerimeter() {
//     let perimeter = 2 * (this.length + this.width);
//     return perimeter;
//   },
// };
// console.log(redtriangle.getPerimeter());

