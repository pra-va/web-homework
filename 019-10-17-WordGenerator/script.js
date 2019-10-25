// Selectors
var answerSpan = document.querySelector("h2");
var btnSpausk = document.querySelector("button");

// Arrays
var kas = ["mama", "teta", "šuo"];
var veiksmas = ["suvalgė", "išmetė", "paslėpė"];
var ka = ["namų darbus", "projektinį darbą", "referatą"];

// Generates random number
function generateRandom(maxValue) {
    return Math.floor(Math.random() * (maxValue + 1));
}

btnSpausk.addEventListener("click", function(e){
    var who = kas[generateRandom(kas.length - 1)];
    var action = veiksmas[generateRandom(veiksmas.length - 1)];
    var what = ka[generateRandom(ka.length - 1)];
    var sentance = "Mano " + who + " " + action + " mano " + what + ".";
    answerSpan.textContent = sentance;
});



