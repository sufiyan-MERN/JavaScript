let car = {
  brand: "tesla",
  model: "model 3",
  year: 2024,
  color: "white",
};
console.log(car.brand);
console.log(car.year);

let student = {
  name: "john",
  age: 20,
  grade: "B",
};
student.city = "mumbai";
student.grade = "A";
delete student.age;

console.log(student);

let classRoom = {
  teacher: {
    name: "Ms.smith",
    subject: "maths",
  },
  student1: {
    name: "alice",
    grade: "A",
  },
  student2: {
    name: "bob",
    grade: "B+",
  },
};
console.log(classRoom.teacher.name);
console.log(classRoom.student1.grade);
console.log(classRoom.student2.name);

const products = [
  {
    id: 101,
    name: "phone",
    price: 30000,
  },
  {
    id: 102,
    name: "laptop",
    price: 150000,
  },
  { id: 103, name: "tablet", price: 25000 },
];
console.log(products[2].name);
console.log(products[0].price);
products.push({
  id: 104,
  name: "smart watch",
  price: 10000,
});
console.log(products);

const post = [
  {
    userName: "tech_guru",
    content: "learning javascript",
    likes: 150,
  },
  {
    userName: "tech_ninja",
    content: "javascript is awesome",
    likes: 200,
  },
];
console.log(post[0].content);
console.log(post[1].likes);
post[0].likes = 175;
console.log(post[0].likes);

let step1 = Math.random();
console.log(step1);

let step2 = step1 * 10;
console.log(step2);

let step3 = Math.floor(step2);
console.log(step3);

let step4 = step3 + 1;
console.log(step4);

let dice = Math.floor(Math.random() * 6 - 1 + 1) + 1;
console.log(dice);

let week = Math.floor(Math.random() * 7 - 1 + 1) + 1;
console.log(week);

let age = Math.floor(Math.random() * (25 - 18 + 1)) + 18;
console.log(age);

let marks = Math.floor(Math.random() * (100 - 0 + 1) + 1);
console.log(marks);

const foods = ["pizza", "burger", "pasta", "sushi", "biriyani"];
let randomFood = Math.floor(Math.random() * foods.length);
console.log("Today's special:" + foods[randomFood]);

let players = [
  {
    name: "alice",
    score: 0,
  },
  {
    name: "bob",
    score: 0,
  },
  {
    name: "charlie",
    score: 0,
  },
];
let diceRoll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
let score = (players[0].score = diceRoll);
console.log("alice's score: " + players[0].score);
console.log("bob's score: " + players[1].score);
console.log("charlie's score: " + players[2].score);

const ticket = [
  {
    ticket1: Math.floor(Math.random) * (9999 - 1000 + 1) + 1000,
  },
  {
    ticket2: Math.floor(Math.random) * (9999 - 1000 + 1) + 1000,
  },

  {
    ticket3: Math.floor(Math.random) * (9999 - 1000 + 1) + 1000,
  },
  {
    ticket4: Math.floor(Math.random) * (9999 - 1000 + 1) + 1000,
  },
  {
    ticket5: Math.floor(Math.random) * (9999 - 1000 + 1) + 1000,
  },
];
console.log(ticket[0]);
