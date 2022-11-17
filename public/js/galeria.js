let nav = document.getElementById('nav');

const barra = '<nav class="navbar navbar-inverse">' +
    '<div class="barra" id="barra">' +
    '<div class="container-fluid">' +
    '<div class="navbar-header" class="logo" id="logo">' +
    '<a href="index.html"> <img src="https://res.cloudinary.com/vladzzers/image/upload/v1666616804/logo_tpe8qo.jpg" width="30" height="30">Mejor-Visión</a>' +
    '</div>' +
    '<a href="#contact">Contacto</a>' +
    '<a href="index.html">Volver a home</a>' +
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