let $color = document.getElementById("color");
let $animalInfo = document.querySelector("div.animal-info");
let ageElement = document.querySelector("div#age");

console.log($color);
console.log($animalInfo);
console.log(ageElement);

let $infoItem = document.querySelectorAll("div.info-item");
console.log($infoItem);

let $infoItem2 = document.getElementsByClassName("info-item");
console.log($infoItem2);

let $infoItem3 = document.getElementsByTagName("div");
console.log($infoItem3);

let $name = document.getElementById("name");
$name.className = "dog-name";
console.log($name);
console.log($name.className);

let $animalInfo2 = document.querySelector("div.animal-info");
$animalInfo2.id = "animal";
console.log($animalInfo2);
console.log($animalInfo2.id);

let $color2 = document.getElementById("color");
$color2.classList.remove("info-item");
$color2.classList.add("dog-color");
console.log($color2);

let $age = document.getElementById("age");
$age.textContent = "5살";
console.log($age);

let $color3 = document.getElementById("color");
$color3.style.color = "blue";
$color3.style.fontSize = "30px";

let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";
$type.textContent = "말티즈";

console.log($type);

$animalInfo.appendChild($type);

let $button = document.createElement("button");
$button.id = "new-button";
$button.classList.add("new-button");
$button.textContent = "버튼";
$button.addEventListener("click", () => {
  window.alert("클릭");
});
$animalInfo.appendChild($button);
// $animalInfo.innerHTML = '<div id="name">고양이</div>'; 기존의 모든 자식요소들은 제거가 되고 추가한 새로운 요소로 대체됨
console.log($animalInfo.innerHTML);
