var plaatjes = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];

while(randomNumbers.length < 9) {

    random = Math.floor(Math.random() * 9) + 1;
    if(randomNumbers.lastIndexOf(random) == -1) {
        randomNumbers.push(random);
    }
}

random = 0;
for(var i = 0; i <plaatjes.length; i++) {
    plaatjes[i].src = "img/dier" + randomNumbers[random] + ".jpg";
    random++;
}