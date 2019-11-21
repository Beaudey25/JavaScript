var plaatjes = [1,2,3]
var teller = 0;
var Mond = document.getElementById("Mond");
Mond.style.backgroundImage = "url('img/mond1.jpg')";

Mond.addEventListener("click", function () {
    Mond.style.backgroundImage = "url('img/mond"+ getmond() + ".jpg')";
})

function getmond() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}
var plaatjes = [1,2,3]
var teller1 = 0;

var Neus = document.getElementById("Neus");
Neus.style.backgroundImage = "url('img/neus1.jpg')";

Neus.addEventListener("click", function () {
    Neus.style.backgroundImage = "url('img/neus"+ getneus() + ".jpg')";
})

function getneus() {
    if (teller1 >= plaatjes.length) {
        teller1 = 1;
    } else {
        teller1++;
    }
    return teller1;
}

var plaatjes = [1,2,3]
var teller2 = 0;

var Gezicht = document.getElementById("Gezicht");
Gezicht.style.backgroundImage = "url('img/Gezicht1.jpg')";

Gezicht.addEventListener("click", function () {
    Gezicht.style.backgroundImage = "url('img/Gezicht"+ getgezicht() + ".jpg')";
})

function getgezicht() {
    if (teller2 >= plaatjes.length) {
        teller2 = 1;
    } else {
        teller2++;
    }
    return teller2;
}