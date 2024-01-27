import "normalize.css";
import "../css/index.min.css";
import * as Components from "../components";
import imgUrlFB from "../src/fb.png";
import imgUrlInsta from "../src/insta.png";
import imgUrlq from "../src/quote.png";


const { Header, Delivery, Footer } = Components;

document.querySelector("#appdeliv").innerHTML = `
    ${Header()}
    ${Delivery()}
    ${Footer()}
`;

document.getElementById('fb-img').src = imgUrlFB;
document.getElementById('insta-img').src = imgUrlInsta;
document.getElementById('quote-img').src = imgUrlq;

document.getElementById('topBtn')
  .addEventListener('click', () => location = "../index.html");

//hide item delivery

let left = document.querySelector('.left');
left.style.display = "none";
let right = document.querySelector('.right');
right.style.display = "none";





window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
});