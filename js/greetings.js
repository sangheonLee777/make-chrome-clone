const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden")
  const username = loginInput.value;
  localStorage.setItem("username",username)
  paintGreetings(username)
}

function paintGreetings (username) {
  greeting.classList.remove("hidden");
  greeting.innerText = `hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit)

const savedUsername= localStorage.getItem("username");
console.log(savedUsername);

if(savedUsername===null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit)
}else {
  paintGreetings(savedUsername)
}

