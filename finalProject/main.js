
import "./css/index.min.css";
import * as Components from "./components";
import { menuAndPrice } from "./data";

import imgUrlFB from "./src/fb.png";
import imgHeader from "./src/Header.jpg";
import imgUrlprev1 from "./src/IMG1.jpg";
import imgUrlprev2 from "./src/IMG2.jpg";
import imgUrlprev3 from "./src/IMG3.jpg";
import imgUrlprev4 from "./src/IMG4.jpg";
import imgUrlprev5 from "./src/IMG5.jpg";
import imgUrlInsta from "./src/insta.png";
import imgUrlq from "./src/quote.png";
import imgUrlArrow from "./src/arrow.png";
import imgLogo from "./src/pizzapng.png";


const { Header, Main, Footer } = Components;
const {menuData} = menuAndPrice;


document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Main({menuData})}
    ${Footer()}
`;

document.getElementById('Delivery')
  .addEventListener('click', () => location = 'nested/delivery.html');

document.getElementById('topBtn')
  .addEventListener('click', () => location = "./index.html");

document.getElementById('fb-img').src = imgUrlFB;
document.getElementById('insta-img').src = imgUrlInsta;
document.getElementById('header-img').src = imgHeader;
document.getElementById('quote-img').src = imgUrlq;
document.getElementById('prev-img1').src = imgUrlprev1;
document.getElementById('prev-img2').src = imgUrlprev2;
document.getElementById('prev-img3').src = imgUrlprev3;
document.getElementById('prev-img4').src = imgUrlprev4;
document.getElementById('prev-img5').src = imgUrlprev5;
document.getElementById('arrow-imgL').src = imgUrlArrow;
document.getElementById('arrow-imgR').src = imgUrlArrow;
document.getElementById('logo-img').src = imgLogo;


//Hidebar
let lastScroll = 0;
const nav = document.querySelector('.nav');
const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containHide = () => nav.classList.contains('hide');

window.addEventListener("scroll", () =>{
  if (scrollPosition() > lastScroll && !containHide()) {
    nav.classList.add('hide');
  }
  else if(scrollPosition() < lastScroll && containHide()){
    nav.classList.remove('hide');
  }
  lastScroll = scrollPosition();
});

//galery
let width = 100; 
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0;


document.querySelector('.leftBtn').onclick = function() {
    position += width;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'vw';
};

document.querySelector('.rightBtn').onclick = function() {
    position -= width;
    position = Math.max(position, -width * (listElems.length - 1));
    list.style.marginLeft = position + 'vw';
};



