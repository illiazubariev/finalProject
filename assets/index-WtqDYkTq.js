(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g=()=>`
    <nav id="top" class="nav">
            <div class="left">
                <ul>
                    <li><a href="#menu" class="btn_1">MENU</a></li>
                    <li><a href="#carousel" class="btn_1">INFO</a></li>
                    <li><a href="#footer" class="btn_1">CONTACTS</a></li>
                </ul>
            </div>
            <div class="centr">
                <div class="Logo">
                    <a id="topBtn" class="btn_1">Pizzerie</a>
                </div>
            </div>
            <div class="right">
                <button id="Delivery" class="btn_2">OBJEDNAT ROZVOZ</button>
            </div>
        </nav>
    <header id="prev" class='Pad1'>
        <div class="prev">
            <img id="header-img" alt="">
            <h1>Ty nejlepší pizzerie <br>v Praze</h1>
        </div>
    </header>`,f=({menuData:d})=>`<main>
            <div class="Info">
            <h2>~ O nás ~</h2>
            <ul class="oNas" id="block">
                <li class="imgQ"><img id="quote-img" alt=""></li>
                <li><b>První provozovna byla otevřená v 1998</b> roce na Praze 7 - Letné. S krásnou zahrádkou a u Letenského náměstí se hned stala známým bodem pro všechny milovníky pizzy. V prvním roce začala poskytovat slevy studentům na karty ISIC. Tato spolupráce trvá dodnes. Dnes už je Pizzeria synonymem pro dobrou pizzu pro mladé zákazníky. <br><br>
                    <b>V roce 1999 se přidaly hned dvě provozovny,</b> a to provozovna na Praze 3 – Žižkově v Seifertové ul. a provozovna na Praze 5 – Smíchově v Štefánikové ul., přímo naproti Švandovu divadlu. Žižkovská provozovna se chlubí nádhernou letní zahrádkou a Smíchovská se třemi podlažími a 100 místy k sezení láká i větší skupiny. <br>   
                    Nově nabízíme rozvoz jídla po centru Prahy s objednávkou online.</li>
            </ul>
        </div>
        <h3>~ Naše restaurace ~</h3>
        <div id="carousel" class="carousel">
        <div class="leftBtn"><img class="imgL" id="arrow-imgL" alt="arrow"></div>
        <div class="rightBtn"><img class="imgR" id="arrow-imgR" alt="arrow"></div>
            <div class="gallery">
              <ul>
                <li><img id="prev-img1"></li>
                <li><img id="prev-img2"></li>
                <li><img id="prev-img3"></li>
                <li><img id="prev-img4"></li>
                <li><img id="prev-img5"></li>
              </ul>
            </div>
        </div>
        <div id="menu" class="menu">
            <h4>~ Menu ~</h4>
            ${d.map(({itemName:n,price:o})=>`
        <ul class="price_item">
            <li>${n}</li>
            <li>${o}</li>
        </ul>
        `).join("")}
        </div>
        <h5>~ Contacts ~</h5>
        <div class="geo">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20490.77655366178!2d14.431260649999999!3d50.061061499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94673d77dd09%3A0x4c9f4f645f532866!2zVnnFoWVocmFk!5e0!3m2!1sru!2scz!4v1704033302338!5m2!1sru!2scz" width="1200" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </main>`,y=()=>`<footer id="footer">
            <div class="bottom">
            <ul class="etc">
                <li><b>Copyright 2023,</b> Všechna práva vyhrazena.</li>
                <li class="social">
                    <span>Sledujte nás</span>
                    <a href="https://www.instagram.com/" class="btn_3"><img id="insta-img" alt="instagram"></img></a>
                    <a href="https://www.facebook.com/" class="btn_3"><img id="fb-img" alt="fb"></a>
                </li>
            </ul>
        </div>
    </footer>`,h=()=>`<main class="dMain">
    <h1 >Vyberte si z široké nabídky pizzy či čehokoliv dalšího z naší nabídky, na co máte právě chuť a my se postaráme o bezproblémový dovoz až k vašim dveřím. Rozvoz jídel po Praze. Nás prosím kontaktujte na tel. +420 777 688 804.
    <img class="loader" id="quote-img" alt="">
    </h1>
    </main>`,b=Object.freeze(Object.defineProperty({__proto__:null,Delivery:h,Footer:y,Header:g,Main:f},Symbol.toStringTag,{value:"Module"})),z=[{itemName:"CAPRICCOSA / tomat, sýr, šunka, žampiony",price:"219 Kč"},{itemName:"HAWAI / tomat, sýr, šunka, ananas",price:"270 Kč"},{itemName:"ŽAMPIONOVÁ / tomat, sýr, žampiony",price:"260 Kč"},{itemName:"ŠUNKOVÁ / tomat, sýr, šunka",price:"265 Kč"},{itemName:"ISIC PEPINO / tomat, sýr, černé olivy, kapie",price:"265 Kč"},{itemName:"MARGARITA / tomat, sýr",price:"199 Kč"},{itemName:"CIBULOVÁ / tomat, sýr, cibule",price:"205 Kč"},{itemName:"Cola, Fanta / 0.5l",price:"30 Kč"}],I={menuData:z},P="/finalProject/assets/fb-uX1L4t0X.png",k="/finalProject/assets/Header-48TTNi6r.jpg",w="/finalProject/assets/IMG1-pgymPbz0.jpg",j="/finalProject/assets/IMG2-XlN6wkFz.jpg",N="/finalProject/assets/IMG3-O3bh5R-Q.jpg",B="/finalProject/assets/IMG4-IK0XnqHS.jpg",E="/finalProject/assets/IMG5-DagtKeIV.jpg",L="/finalProject/assets/insta-JZy_yhRD.png",O="/finalProject/assets/quote-cnxhbrAs.png",v="/finalProject/assets/arrow-4Vh_e8wl.png",{Header:M,Main:S,Footer:A}=b,{menuData:_}=I;document.querySelector("#app").innerHTML=`
    ${M()}
    ${S({menuData:_})}
    ${A()}
`;document.getElementById("Delivery").addEventListener("click",()=>location="nested/delivery.html");document.getElementById("topBtn").addEventListener("click",()=>location="./index.html");document.getElementById("fb-img").src=P;document.getElementById("insta-img").src=L;document.getElementById("header-img").src=k;document.getElementById("quote-img").src=O;document.getElementById("prev-img1").src=w;document.getElementById("prev-img2").src=j;document.getElementById("prev-img3").src=N;document.getElementById("prev-img4").src=B;document.getElementById("prev-img5").src=E;document.getElementById("arrow-imgL").src=v;document.getElementById("arrow-imgR").src=v;let s=0;const c=document.querySelector(".nav"),l=()=>window.scrollY||document.documentElement.scrollTop,u=()=>c.classList.contains("hide");window.addEventListener("scroll",()=>{l()>s&&!u()?c.classList.add("hide"):l()<s&&u()&&c.classList.remove("hide"),s=l()});let m=100,p=carousel.querySelector("ul"),q=carousel.querySelectorAll("li"),i=0;document.querySelector(".leftBtn").onclick=function(){i+=m,i=Math.min(i,0),p.style.marginLeft=i+"vw"};document.querySelector(".rightBtn").onclick=function(){i-=m,i=Math.max(i,-m*(q.length-1)),p.style.marginLeft=i+"vw"};
