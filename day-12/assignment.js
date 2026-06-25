// let btn = document.querySelector("button");
// let para = document.querySelector("#clickCount");
// let count = 0;
// btn.addEventListener("click", function () {
//   count++;
//   para.innerText = `Button clicked ${count} times`;
// });

// let cardH2 = document.querySelector("h2");
// let card = document.querySelector(".card");
// card.addEventListener("mouseenter", function () {
//   card.style.backgroundColor = "lightblue";
//   cardH2.style.fontSize = "30px";
//   card.style.border = "3px solid blue";
// });
// card.addEventListener("mouseleave", function () {
//   card.style.backgroundColor = "white";
//   cardH2.style.fontSize = "20px";
//   card.style.border = "1px solid gray";
// // });

// function changeColor() {
//   this.style.backgroundColor = "lightgreen";
//   console.log(this.innerText);
// }
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
// let button = document.querySelector("button");

// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// button.addEventListener("click", changeColor);

// let usernameInput = document.querySelector("#username");
// let passInpute = document.querySelector("#password");
// let submit = document.querySelector("button");
// submit.addEventListener("click", function (event) {
//   event.preventDefault();
//   let personename = usernameInput.value;
//   let personepass = passInpute.value;
//   alert("welcome: " + personename);

//   console.log(` username: ${personename}`);
//   console.log(` password: ${personepass}`);
// });

// let userName = document.querySelector("#username");
// let status = document.querySelector("#status");

// userName.addEventListener("inpute", function () {
//   status.innerText = "Checking...";
// });

// userName.addEventListener("change", function () {
//   status.innerText = "username available!";
//   status.style.color = "green";

//   console.log(`final username: ${userName.value}`);
// });

let taskInpute = document.querySelector("#taskinput");
let taskList = document.querySelector("#todolist");
let btn = document.querySelector("#submit");
let li = document.createElement("li");
let countListItems = document.querySelector("#counterlist");

btn.addEventListener("click", function (event) {
  event.preventDefault();
});
let addTask = document.querySelector("#addtask");
addTask.addEventListener("click", function () {
  let ul = document.querySelector("#todolist");
  ul.appendChild(li);
  li.innerText = taskInpute.value;
  taskInpute.value = "";
});

li.addEventListener("mouseenter", () => {
  li.style.backgroundColor = "lightgreen";
});
li.addEventListener("mouseleave", () => {
  li.style.backgroundColor = "";
});

function updateCount() {
  let totalLi = document.querySelectorAll("li").length;
  countListItems.innerText = `Total tasks: ${totalLi}`;
}
updateCount();
