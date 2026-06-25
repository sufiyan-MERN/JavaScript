// console.log("before the calculation");
// for (let i = 0; i < 500; i++) {}
// console.log("after the calculation");

// function fabonacci(n) {
//   if (n <= 1) return n;
//   return fabonacci(n - 1) + fabonacci(n - 2);
// }
// console.log("calculating");
// let result = fabonacci(40);
// console.log("result", result);
// console.log("done");

// console.log("open CGC portal");
// setTimeout(() => {
//   console.log("hearder loaded");
// }, 1000);
// setTimeout(() => {
//   console.log("student data loaded");
// }, 2000);
// setTimeout(() => {
//   console.log("footer loaded");
// }, 500);

// console.log("portal structure ready!");

// function submittingForm() {
//   console.log("submitting form...");

//   setTimeout(() => {
//     console.log("form submitted sucessfully!");
//   }, 1500);
//   console.log("please wait...");
// }
// submittingForm();

// function greet(name, callback) {
//   console.log("hello " + name);
//   callback();
// }
// greet("alice", () => {
//   console.log("goodbye!");
// });

// function game(name, country) {
//   console.log(name);
//   country();
// }
// game("free fire ", () => {
//   console.log("singapur");
// });

// function fetchStudentData(suudentId, callaback) {
//   console.log("fetching data for student ID: ", suudentId);
//   setTimeout(() => {
//     let studentData = {
//       id: suudentId,
//       name: "rahul",
//       course: "cpmputer science",
//     };
//     console.log("data fetched sucessfully");
//     callaback(studentData);
//   }, 2000);
// }
// function displaystudent(data) {
//   console.log("dispalying student: ");
//   console.log("name: ", data.name);
//   console.log("course: ", data.course);
// }
// fetchStudentData(101, displaystudent);

// function changeColor(color, delay, callback) {
//   setTimeout(() => {
//     let h1 = document.querySelector("h1");
//     h1.style.backgroundColor = color;
//     console.log("changed:", color);
//     callback();
//   }, delay);
// }
// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("yellow", 1000, () => {
//       changeColor("black", 1000, () => {
//         changeColor("white", 1000, () => {
//           console.log("color changing done");
//         });
//       });
//     });
//   });
// });

// let mypromise = new Promise((resolve, reject) => {
//   let sucesses = true;
//   if (sucesses) {
//     resolve("operation sucessfull!");
//   } else {
//     reject("operation failed!");
//   }
// });

// function saveToDatabase(data) {
//   return new Promise((resolve, reject) => {
//     console.log("saving to database...");
//     setTimeout(() => {
//       let dbAvailable = true;
//       if (dbAvailable) {
//         resolve({
//           message: "data saved sucessfully",
//           id: 10983,
//         });
//       } else {
//         reject("database connection failed");
//       }
//     }, 1500);
//   });
// }
// let savePromise = saveToDatabase({
//   name: "john",
//   age: 25,
// });
// console.log(savePromise);

// let loginStatus = "success";
// let loginPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (loginStatus == "success") {
//       resolve("login sucessfully, welcome!");
//     } else {
//       reject("login failed ! invalid credentials.");
//     }
//   }, 1000);
// });

// loginPromise
//   .then((message) => {
//     console.log("✔", message);
//   })
//   .catch((error) => {
//     console.log("wrong", error);
//     console.log("please try again.");
//   });

// function fetchUserProfile(userId) {
//   return new Promise((resolve, reject) => {
//     console.log("fetching user profile...");
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({
//           id: userId,
//           name: "priya sharma",
//           email: "priya@gmail.com",
//           role: "student",
//         });
//       } else {
//         reject("invalid user ID");
//       }
//     }, 2000);
//   });
// }

// fetchUserProfile(Number(prompt("enter your id:")))
//   .then((user) => {
//     console.log("user found!");
//     console.log("name: ", user.name);
//     console.log("eamil: ", user.email);
//   })
//   .catch(() => {
//     console.log("error");
//   });

// fetchUserProfile(-1)
//   .then((user) => {
//     console.log("user found", user);
//   })
//   .catch(() => {
//     // console.log("error");
//   });
