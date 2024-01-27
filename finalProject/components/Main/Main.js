export const Main = ({menuData}) => {
    const GetMenuPrice = () => {
        return menuData.map(({itemName,price}) => `
        <ul class="price_item">
            <li>${itemName}</li>
            <li>${price}</li>
        </ul>
        `,
        ).join("");
    }
    return `<main>
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
            ${GetMenuPrice()}
        </div>
        <h5>~ Contacts ~</h5>
        <div class="geo">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20490.77655366178!2d14.431260649999999!3d50.061061499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94673d77dd09%3A0x4c9f4f645f532866!2zVnnFoWVocmFk!5e0!3m2!1sru!2scz!4v1704033302338!5m2!1sru!2scz" width="1200" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </main>`;
};
