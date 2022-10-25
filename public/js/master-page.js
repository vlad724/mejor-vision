let nav = document.getElementById('nav');
const barra = '<nav class="navbar navbar-inverse">' +
    '<div class="barra" id="barra">' +
    '<div class="container-fluid">' +
    '<div class="navbar-header">' +
    '<a href="index.html"> <img src="https://res.cloudinary.com/vladzzers/image/upload/v1666616804/logo_tpe8qo.jpg" width="30" height="30">Mejor-Visión</a>' +
    '</div>' +
    '<a href="#cruceros">cruceros</a>' +
    '<a href="#footer">footer</a>' +
    '<a href="#wsp">wsp</a>' +
    '<a href="#nosotros">Nosotros</a>' +
    '<a href="javascript:void(0);" class="icon" onclick="myFunction()">' +
    '<i class="fa fa-bars"></i>' +
    '</a>' +
    '</div>' +
    '</div>' +
    '</nav>';

nav.innerHTML = barra;

let footer = document.getElementById('footer');
const pie = '<section id="footer">' +
    '<footer>' +
    '<p>Author: Tusca Chetes</p>' +
    '<p><a href="mailto:tuscachetes@example.com">tuscachetes@example.com</a></p>' +
    '</footer>' +
    '</section>';
footer.innerHTML = pie;

let whatsapp = document.getElementById('whatsapp');
const wspa = '<p> Cotiza tus lentes con nosotros: <a href="https://walink.co/fae579" target="_blank">' +
    '<img src="https://ebweb.es/wp-content/uploads/2020/09/logo-wasap.png" width="50" height="50">' +
    '</a></div></p>' +
    '<p> Trabaja con nosotros: <a href="https://walink.co/2bcfa3" target="_blank">' +
    '<img src="https://ebweb.es/wp-content/uploads/2020/09/logo-wasap.png" width="50" height="50">' +
    '</a></div></p>' +
    '<p> Revisa nuestro instagram: <a href="https://instagram.com/opmejorvision?igshid=YmMyMTA2M2Y=" target="_blank">' +
    '<img src="https://res.cloudinary.com/vladzzers/image/upload/v1666642428/pngwing.com_ghbomd.png" width="70" height="50">' +
    '</a></div></p>';
whatsapp.innerHTML = wspa;

function myFunction() {
    var x = document.getElementById("barra");
    if (x.className === "barra") {
        x.className += " responsive";
    } else {
        x.className = "barra";
    }
}

$(document).ready(function() { irArriba(); }); //Hacia arriba

function irArriba() {
    $('.ir-arriba').click(function() { $('body,html').animate({ scrollTop: '0px' }, 1000); });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) { $('.ir-arriba').slideDown(600); } else { $('.ir-arriba').slideUp(600); }
    });
    $('.ir-abajo').click(function() { $('body,html').animate({ scrollTop: '1000px' }, 1000); });
}