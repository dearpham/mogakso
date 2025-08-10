const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector("div.content");
let tempalte = "";
const getData = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        tempalte += `<img src = ${elm.url}></img>`;
      });
      $content.innerHTML = tempalte;
    }
  } catch (err) {
    console.log(err);
  }
};

getData();
