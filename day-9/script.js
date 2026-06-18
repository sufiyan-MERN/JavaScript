// let numbers = [10, 20, 30, 40];
// numbers.forEach((num) => {
//   console.log(num);
// });

// let price = [99, 199, 299];
// price.forEach((dollar) => {
//   console.log(`$${dollar}/-`);
// });

// let fruits = ["apple", "babana", "orange"];
// fruits.forEach((fall, index) => {
//   console.log(`${index + 1}. ${fall}`);
// });

// let itemsPrice = [22, 25, 43, 54];
// let total = 0;
// itemsPrice.forEach((itemsPrice) => {
//   total += itemsPrice;
// });
// console.log(`total price ${total}`);

// let names = ["alice", "bob", "joseph"];
// let capitalNames = [];
// names.forEach((names) => {
//   capitalNames.push(names.toUpperCase());
// });
// console.log(capitalNames);

// let names = ["alice", "bob", "joseph"];
// let capitalNames = [];
// names.forEach((names) => {
//   capitalNames.push(names.toUpperCase());
// });
// console.log(capitalNames);

// let num = [1, 2, 3, 4];
// let double = num.map((dnum) => dnum * 2);
// console.log(num);
// console.log(double);

// let students = [
//   {
//     name: "john",
//     age: 28,
//   },
//   {
//     name: "john",
//     age: 28,
//   },
//   {
//     name: "john",
//     age: 28,
//   },
// ];
// let studentsNames = students.map((students) => students.name);
// console.log(studentsNames);

// let studentsAge = students.map((students) => students.age);
// console.log(studentsAge);

// let price = [128, 211, 85];
// let taxPrice = price.map((paiyse) => paiyse * 1.18);
// console.log(`price before tax ${price}`);
// console.log(`price after tax ${taxPrice}`);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 33, 32];
// let evenNumbers = numbers.filter((nums) => nums % 2 == 0);
// console.log(evenNumbers);

// let ages = [22, 12, 26, 18, 20];
// let verification = ages.every((acc) => acc >= 18);
// console.log(verification);

// let age = [12, 33, 42, 34];
// let teenAge = age.some((acc) => acc <= 18);
// console.log(teenAge);

// let numbers = [12, 32, 1, 2, 3, 4];
// let sumOFNumbers = numbers.reduce((total, num) => total + num, 0);
// console.log(sumOFNumbers);

// let cart = [
//   { items: "t-shirt", price: 500 },
//   { items: "shoes", price: 1500 },
//   { items: "hat", price: 200 },
// ];
// let total = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(total);

// let values = [22, 32, 66, 45, 90];
// let max = values.reduce((acc, maximum) => acc < maximum, 0);
// console.log(max);

// let nested = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let flat = nested.reduce((acc, join) => acc.concat(join));
// console.log(flat);

// const inventory = [
//   { name: "Laptop", category: "Electronics", price: 1000, quantity: 5 },
//   { name: "Headphones", category: "Electronics", price: 150, quantity: 10 },
//   { name: "Coffee Mug", category: "Kitchen", price: 15, quantity: 20 },
//   { name: "Desk Chair", category: "Furniture", price: 200, quantity: 4 },
// ];

// let totalValue = inventory.reduce((acc, total) => {
//   accumulator.totalValue += currentItem.price * currentItem.quantity;
//   return total;
// }, 0);
// console.log(totalValue);

// let original = [1, 2, 3, 4];
// let copy = [...original];
// console.log(copy);
// console.log(original);

// let original = [1, 2, 3];
// let copy = [...original];
// console.log(copy); // [1, 2, 3]

// let fruits = ["apple", "banana", "mongo"];
// let vegetables = ["carrot", "ladyfinger", "tamate"];
// let foods = [...fruits, ...vegetables];
// console.log(foods);

// let greet = "hello";
// let array = [...greet];
// console.log(array);
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(5, 4, 6));
// console.log(sum(6, 7, 4, 3));

// let scores = [85, 90, 78, 92, 88];
// let sum = scores.reduce((acc, score) => acc + score, 0);
// let average = sum / scores.length;
// console.log(average);

// function greet(name = "user") {
//   console.log(`hello ${name}`);
// }
// greet("ali");
// greet();

// let colors = ["red", "green", "blue"];
// let [first, second, third] = colors;
// console.log(first);
// console.log(third);

// function taxPrice(price) {
//   return [price * 0.1, price * 1.1];
// }
// const [salesTax, totaBIll] = taxPrice(100);
// console.log(totaBIll);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = nums.reduce((acc, num) => {
//   if (num % 2 == 0) {
//     return acc + num;
//   }
//   return acc;
// }, 0);
// console.log("numbers: ", nums);
// console.log("sum of even numbers: ", sum);

// let fruits = ["apple", "banana", "mango"];
// let vegetables = ["ladyfingure", "tomato", "potato"];
// let dairy = ["milk", "curd", "malai"];
// let groceries = [...fruits, ...vegetables, ...dairy];
// console.log(groceries);

// let user = {
//   name: "suifyan",
//   gmail: "sufiyantdc@gmail.com",
// };
// let fullProfile = {
//   ...user,
//   age: 19,
//   city: "hyderabad",
//   country: "india",
// };
// console.log(user);
// console.log(fullProfile);

// const book = {
//   title: "Harry Potter",
//   author: "JK rolling",
//   year: 2007,
//   pages: 567,
// };
// const { title, author: writtenBy } = book;
// console.log(`book title ${writtenBy}`);
