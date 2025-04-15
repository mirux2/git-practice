const userName = prompt("お名前を教えてください。");
const u = document.getElementById("name");
if (userName == "") {
  u.innerHTML = "名無し";
} else {
  u.innerHTML = userName;
}

let userResult;
let rand = Math.floor(Math.random() * 5);
if (rand == 0) {
  userResult = "大吉";
} else if (rand == 1) {
  userResult = "中吉";
} else if (rand == 2) {
  userResult = "小吉";
} else if (rand == 3) {
  userResult = "吉";
} else {
  userResult = "凶";
}
const lack = document.getElementById("result");
lack.innerHTML = userResult;
