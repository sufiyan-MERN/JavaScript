// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log("button was clicked");
//   alert("you clicked me ");
// });

// let button2 = document.createElement("button");
// button2.setAttribute("id", "mybtn");
// let body = document.querySelector("body");
// body.appendChild(button2);
// button2.innerText = "click me 2";
// button2.addEventListener("click", function () {
//   console.log("first action");
// });
// button2.addEventListener("click", function () {
//   console.log("second action");
// });

// let para = document.querySelector("p");
// let count = 0;
// para.innerText = "click me ";
// para.addEventListener("click", function () {
//   count++;
//   para.innerText = `you clicked me ${count} times`;
// });

// let box = document.querySelector("#box");

// box.addEventListener("mouseenter", function () {
//   box.style.backgroundColor = "yellow";
//   console.log("mouser entered");
// });
// box.addEventListener("mouseleave", function () {
//   box.style.backgroundColor = "white";
//   console.log("mouse leave");
// });

// let hideBtn = document.querySelector("#hideBtn");
// let content = document.querySelector("#content");
// hideBtn.addEventListener("click", function () {
//   if (content.style.display === "none") {
//     content.style.display = "block";
//     hideBtn.innerText = "Hide";
//   } else {
//     content.style.display = "none";
//     hideBtn.innerText = "Show";
//   }
// });

// let card = document.querySelector("#card");

// card.addEventListener("mouseenter", function () {
//   card.style.transform = "scale(1.1)";
//   card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
// });
// card.addEventListener("mouseleave", function () {
//   card.style.transform = "scale(1)";
//   card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// });

// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let button = document.querySelector("button");

// function colorChanger() {
//   this.style.backgroundColor = "lightblue";
//   console.log(this.innerText + " was clicked");
// }
// h1.addEventListener("click", colorChanger);
// h2.addEventListener("click", colorChanger);
// button.addEventListener("click", colorChanger);

// let boxes = document.querySelector(".box");

// function toggleActive() {
//   this.classList.toggle("active");
// }
// for (let box of boxes) {
//   box.addEventListener("click", toggleActive);
// }

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("form submitted");
// });

// let loginForm = document.querySelector("#login");

// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let username = document.querySelector("#username").value;
//   let password = document.querySelector("#password").value;

//   console.log("usernane:", username);
//   console.log("password", password);

//   alert("welcome " + username + " !");
// });

// let signUP = document.querySelector("#signup");
// signUP.addEventListener("submit", function (event) {
//   let email = document.querySelector("#email").value;
//   let age = document.querySelector("#age").value;

//   if (age < 18) {
//     alert("you must be 18 years older to sign up !");
//   } else if (!email.includes("@")) {
//     alert("please enter a valid email");
//   } else {
//     alert("sign up sucessfull !");
//     console.log("user registered", email    );
//   }
// });

// let usernameInpute = document.querySelector("#username");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let usernameInpute = usernameInpute.value;
//   console.log("name entered", usernameInpute);
// // });

// let textArea = document.querySelector("textarea");
// let counter = document.querySelector("#counter");
// textArea.addEventListener("input", function () {
//   let count = textArea.value.length;
//   counter.innerText = count + "characters";
// });

// let inputText = document.querySelector("#forchange");
// inputText.addEventListener("change", function () {
//   console.log("final name:", inputText.value);
//   alert("name saved: " + inputText.value);
// });

let searchBox = document.querySelector("#search");
let suggestion = document.querySelector("#suggestion");
searchBox.addEventListener("input", function () {
  let query = searchBox.value;

  if (query.length > 0) {
    ((suggestion.innerHTML = <P>searching for : ${query}</P>),
      (<p>resule 1:${query}tutorial</p>));
  } else {
    suggestion.innerHTML = "";
  }
});
