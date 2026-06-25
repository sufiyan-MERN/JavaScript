// function votingEligibility(age) {
//   return new Promise((resolve, reject) => {
//     if (age >= 18) {
//       resolve("you can vote");
//     } else {
//       reject("you must be 18 years old");
//     }
//   });
// }
// votingEligibility(20)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("error");
//   });

// votingEligibility(16)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function validateNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 0) {
//       resolve(`positive number ${num}`);
//     } else if (num < 0) {
//       reject(`neagtive number: ${num}`);
//     } else {
//       reject("zero is not allowed");
//     }
//   });
// }
// validateNumber(42)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });

// validateNumber(-10)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });

// validateNumber(0)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });

// let password=document.querySelector("#password")
// valueOfPassword=password.value
// function checkPassword(password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (password.length >= 8) {
//         resolve("stronge password");
//       } else {
//         reject("weak password-must be 8 characters");
//       }
//     }, 1000);
//   });
// }

// checkPassword("sufi5")
//   .then((msg) => {
//     console.log("✔", msg);
//   })
//   .catch((err) => {
//     console.log("❌", err);
//   });

// function downloadeFile(fileName) {
//   return new Promise((resolve, reject) => {
//     console.log("downloading", fileName, "...");
//     setTimeout(() => {
//       if (fileName.endsWith(".pdf") || fileName.endsWith(".jpg")) {
//         resolve("downloaded: " + fileName + "(size:2.5 MB)");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// }

// downloadeFile("document.pdf")
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// downloadeFile("image.txt")
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function palceOrder(item) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("order place: ", item);
//     }, 1000);
//   });
// }
// function prepareOrder() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("preparing: ", order.item);
//       resolve({
//         ...order,
//         status: "prepared",
//       });
//     }, 2000);
//   });
// }

// function deliverOrder(order) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("delivering", order.item);
//       resolve({
//         ...order,
//         delivered: true,
//       });
//     }, 1500);
//   });
// }

// palceOrder("pizza")
//   .then(prepareOrder)
//   .then(deliverOrder)
//   .catch((err) => {
//     console.log(err);
//   });
