// // function showMsg() {
// //   console.log("learning functions");
// //   console.log("iam javascript");
// // }
// // showMsg();

// // function greetUser(name) {
// //   console.log(`hello ${name}!`);
// // }
// // greetUser("ali");
// // greetUser("syed");

// // function addNumbers(a, b) {
// //   let sum = a + b;
// //   console.log(sum);
// // }
// // addNumbers(2, 2);
// // addNumbers(10, 10);

// // function avg(a, b, c) {
// //   let average = (a + b + c) / 3;
// //   console.log(average);
// // }
// // avg(3, 3, 3);
// // avg(10, 20, 30);

// // function textNUm(name, age) {
// //   console.log(`iam ${name} & iam ${age} years old`);
// // }
// // textNUm("sufiyan", 19);
// // textNUm("ali", 20);

// // function sum(a, b) {
// //   return a + b;
// // }
// // let result = sum(3, 99);
// // console.log(result);

// // function price(a) {
// //   return a;
// // }
// // price(50);
// // let tax = price * 0.1;
// // let total = price + tax;
// // console.log(total);

// function greeting(name) {
//   return "hello" + name;
// }
// let message = greeting(" ali");
// console.log(message);
// console.log(greeting(" bob"));

// function outer() {
//   let x = 5;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

// function lev1() {
//   let a = 9;
//   function lev2() {
//     let b = 1;
//     function lev3() {
//       let c = a + b;
//       console.log(c);
//     }
//     lev3();
//   }
//   lev2();
// }
// lev1();

// function greet(name) {
//   function message() {
//     return "hello " + name;
//   }
//   console.log(message());
// }
// greet("alice");

// function apple(name) {
//   function num() {
//     return name + 15;
//   }
//   console.log(num());
// }

// apple("iphone ");

// const multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(4, 5));
// console.log(multiply(6, 2));

// const square = (num) => {
//   let root = num * num;
//   return root;
// };
// console.log(square(10));

// function repeatTask(func, n) {
//   for (let i = 0; i <= n; i++) {
//     func();
//   }
// }
// const alertUser = () => {
//   alert("alert!");
// };
// repeatTask(alertUser, 3);

// function applyDiscount(price, discountfunc) {
//   return discountfunc(price);
// }
// const tenPercent = (price) => price * 0.9;
// const twentyPercent = (price) => price * 0.8;

// console.log(applyDiscount(100, tenPercent));
// console.log(applyDiscount(100, twentyPercent));
