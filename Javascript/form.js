const $fruitSelect = document.getElementById("fruitselect");
$fruitSelect.addEventListener("change", (event) => {
  console.log(event.target.value);
});

const $userName = document.getElementById("userName");
const $password = document.getElementById("password");

const $loginBtn = document.querySelector("button");
$loginBtn.addEventListener("click", () => {
  console.log($userName.value);
  console.log($password.value);
});

$password.addEventListener("input", (event) => {
  console.log(event.target.value);
});
