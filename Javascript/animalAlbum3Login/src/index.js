import App from "./app.js";

const $app = document.getElementById("app");

function checkLogin() {
  return localStorage.getItem("isLoggedIn") === "true";
}

function initLogin() {
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      loadApp();
    } else {
      document.getElementById("loginMsg").innerText =
        "❌ 아이디 또는 비밀번호 오류";
    }
  });
}

function loadApp() {
  $app.innerHTML = "";
  new App($app);

  const logoutBtn = document.createElement("button");
  logoutBtn.id = "logoutBtn";
  logoutBtn.innerText = "로그아웃";
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    location.reload();
  });
  $app.prepend(logoutBtn);
}

if (checkLogin()) {
  loadApp();
} else {
  initLogin();
}
