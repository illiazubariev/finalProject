(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const l=()=>`
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
    </header>`,n=({menuData:t})=>`<main>
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
            ${t.map(({itemName:a,price:r})=>`
        <ul class="price_item">
            <li>${a}</li>
            <li>${r}</li>
        </ul>
        `).join("")}
        </div>
        <h5>~ Contacts ~</h5>
        <div class="geo">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20490.77655366178!2d14.431260649999999!3d50.061061499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94673d77dd09%3A0x4c9f4f645f532866!2zVnnFoWVocmFk!5e0!3m2!1sru!2scz!4v1704033302338!5m2!1sru!2scz" width="1200" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </main>`,d=()=>`<footer id="footer">
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
    </footer>`,c=()=>`<main class="dMain">
    <h1 >Vyberte si z široké nabídky pizzy či čehokoliv dalšího z naší nabídky, na co máte právě chuť a my se postaráme o bezproblémový dovoz až k vašim dveřím. Rozvoz jídel po Praze. Nás prosím kontaktujte na tel. +420 777 688 804.
    <img class="loader" id="quote-img" alt="">
    </h1>
    </main>`,m=Object.freeze(Object.defineProperty({__proto__:null,Delivery:c,Footer:d,Header:l,Main:n},Symbol.toStringTag,{value:"Module"})),v="/assets/fb-uX1L4t0X.png",u="/assets/insta-JZy_yhRD.png",p="/assets/quote-cnxhbrAs.png";export{m as C,u as a,p as b,v as i};
