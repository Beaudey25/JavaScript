
var mijnauto = {
    kleur: "blauw",
    merk:"ford",
    snelheid:"0",

    gasgeven: function () {
        this.snelheid +=5;
        console.log(this.snelheid);

    }
}

console.log(mijnauto.kleur)
console.log(mijnauto.gasgeven());


