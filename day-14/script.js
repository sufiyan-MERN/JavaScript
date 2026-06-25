// console.log("hello");

// function normalGreeting() {
//   console.log("hello ,students");
// }
// normalGreeting();

// async function greeting() {
//   return "hello student";
// }
// console.log(greeting());

// async function courseName() {
//   return "javascript fundamentals";
// }
// courseName().then((nane) => {
//   console.log(name);
// });

// function fetchStudentData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "ahmed",
//         grade: "A",
//       });
//     }, 2000);
//   });
// }
// async function displayStudent() {
//   console.log("fetching student data...");
//   const student = await fetchStudentData();
//   console.log("Student Name: ", student.name);
//   console.log("Student Grade: ", student.grade);
// }
// displayStudent();

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("step1: gathering ingredients");
//       resolve();
//     }, 100);
//   });
// }
// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("step2: mixing ingredients");
//       resolve();
//     }, 100);
//   });
// }
// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("step3: baking it in oven");
//       resolve();
//     }, 100);
//   });
// }

// async function bakeCake() {
//   console.log("how to make cake :");
//   await step1();
//   await step2();
//   await step3();
//   console.log("cake is ready");
// }
// bakeCake();

// function showTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("task completed");
//       resolve();
//     }, 2000);
//   });
// }
// async function withoutAwait() {
//   console.log("start");
//   showTask();
//   console.log("end");
// }
// withoutAwait();

// async function withAwait() {
//   console.log("start");
//   await showTask();
//   console.log("end");
// }
// withAwait();

function generateRollNumber() {
  return new Promise((resolve) => {
    const delay = Math.random() * 2000;
    setTimeout(() => {
      let rollno = Math.floor(Math.random() * 100) + 1;
      console.log("Roll No: ", rollno);
      resolve();
    }, delay);
  });
}

// async function assignRollNO() {
//   console.log("---starting assignment---");
//   let rollno1 = await generateRollNumber();
//   let rollno2 = await generateRollNumber();
//   let rollno3 = await generateRollNumber();
//   console.log("--assignment completed--");
// }
// assignRollNO();

// async function assignRollNo() {
//   console.log("---assignment start---");
//   let rollno1 = await generateRollNumber();
//   let rollno2 = await generateRollNumber();
//   let rollno3 = await generateRollNumber();
//   let rollno4 = await generateRollNumber();
//   console.log("---assignmetn end---");
// }
// assignRollNo();

// function changeColor(color, duration) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`traffic light ${color}`);
//       resolve();
//     }, duration);
//   });
// }

// async function trafficLigth() {
//   try {
//     await changeColor("red", 3000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 3000);
//     console.log("traffic cycle completed");
//   } catch (error) {
//     console.log("Error", error);
//   }
// }
// trafficLigth();

// function validateEmail(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email.includes("@")) {
//         resolve("welcome" + email);
//       } else {
//         reject("invalid email " + email);
//       }
//     }, 1000);
//   });
// }
// function CheckEmailExists(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const exist = false;
//       if (exist) {
//         reject("Email already registered");
//       } else {
//         resolve(email);
//       }
//     }, 1000);
//   });
// }
// function createUser(email) {
//   return new Promise((resolve) => {
//     resolve(
//       {
//         id: 101,
//         email: email,
//         city: "hyderabad",
//       },
//       1000,
//     );
//   });
// }

// // validateEmail("ayaan@gmail.com")
// //   .then((email) => {
// //     CheckEmailExists(email);
// //   })
// //   .then((email) => {
// //     createUser(email);
// //   })
// //   .then((email) => {
// //     console.log("user created", email);
// //   })
// //   .catch((error) => {
// //     console.log("registrition failed:", error);
// //   });

// // async function registerUser(email) {
// //   try {
// //     await validateEmail(email);
// //     await CheckEmailExists(email);
// //     const user = await createUser(email);
// //     console.log("user created: ", user);
// //   } catch (error) {
// //     console.log("try again ", error);
// //   }
// // }
// // registerUser("sufiyan@gmail.com");

// function riskyOperation() {
//   return new Promise((resolve, reject) => {
//     let success = Math.random() > 0.5;
//     setTimeout(() => {
//       if (success) {
//         resolve("operation successful");
//       } else {
//         reject("operation failed");
//       }
//     }, 1000);
//   });
// }
// async function performOperation() {
//   try {
//     console.log("start: ");
//     const result = await riskyOperation();
//     console.log(result);
//   } catch (error) {
//     console.log("caught error", error);
//   }
// }
// performOperation();

// function checkInternet() {
//   return new Promise((resolve, reject) => {
//     const isOnline = true;
//     if (isOnline) {
//       console.log("internet connected");
//       resolve();
//     } else {
//       reject("no internet connection");
//     }
//   }, 1000);
// }
// function downloadFile(filename) {
//   return new Promise((resolve, reject) => {
//     const fileExists = true;
//     if (fileExists) {
//       resolve(`file downloaded: ${filename}`);
//     } else {
//       reject(`file not found: ${filename}`);
//     }
//   }, 1500);
// }

// function installFile(filename) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`installed: ${filename}`);
//     }, 1000);
//   });
// }

// async function downloadAndInstall(filename) {
//   try {
//     const internet = checkInternet();
//     console.log(internet);

//     const download = downloadFile(filename);
//     console.log("download");

//     const install = installFile(filename);
//     console.log(install);

//     console.log("all done");
//   } catch (error) {
//     console.log("error", error);
//     console.log("try again later");
//   }
// }
// downloadAndInstall("iron-man");

// function downloadFile(fileName, fileSize) {
//   return new Promise((resolve, reject) => {
//     console.log(`Starting download: ${fileName} (${fileSize}MB)`);
//     let progress = 0;
//     const downloadInterval = setInterval(() => {
//       progress += 20;
//       console.log(`Download progress: ${progress}%`);
//       if (progress >= 100) {
//         clearInterval(downloadInterval);
//         if (Math.random() > 0.2) {
//           // 80% success rate
//           resolve({
//             fileName: fileName,
//             fileSize: fileSize,
//             status: "completed",
//             downloadTime: "5 seconds",
//           });
//         } else {
//           reject("Download failed: Connection lost");
//         }
//       }
//     }, 1000);
//   });
// }

// async function downloadManager(fileName, fileSize) {
//   console.log("--file download manager");
//   try {
//     const response = await downloadFile(fileName, fileSize);
//     // console.log(response);
//     console.log("File name:", response.fileName);
//     console.log("fileSize :", response?.fileSize);
//     console.log("downloading time :", response.downloadTime);
//   } catch (error) {
//     console.log(error);
//   }
// }
// downloadManager("FreeFire", 550);

function connectDatabase() {
  return new Promise((resolve, reject) => {
    console.log("connecting to database");
    setTimeout(() => {
      const connect = Math.random() > 0.1;
      if (connect) {
        console.log("database connected sucessfully");
        resolve();
      } else {
        console.log("connection failed");
        reject();
      }
    }, 1000);
  });
}

function queryDatabase(query) {
  return new Promise((resolve, reject) => {
    console.log(`executing query${query}`);
    setTimeout(() => {
      if (query.includes("SELECT")) {
        resolve([
          {
            id: 1,
            name: "alice",
            age: 25,
          },
          {
            id: 2,
            name: "bob",
            age: 22,
          },
          {
            id: 1,
            name: "charlie",
            age: 21,
          },
        ]);
      } else {
        reject("invalid query");
      }
    }, 1000);
  });
}

function closingDatabase() {
  return new Promise((resolve) => {
    console.log("closing database...");
    setTimeout(() => {
      resolve("database closed");
    }, 500);
  });
}

async function performDatabase(query) {
  try {
    console.log("--database operation--");

    const connectdb = await connectDatabase();
    console.log(connectdb);

    const result = await queryDatabase(query);
    console.log("query result: ");
    result.forEach((user) => {
      console.log(`name:${result.name},Age:${result.age}`);
    });

    const closedb = await closingDatabase();
    console.log(closedb);
  } catch (error) {
    console.log(error);
  }
}
performDatabase("SELECT * from user");
