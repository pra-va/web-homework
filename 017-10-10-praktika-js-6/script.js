// Buttons
var kaireje = document.querySelectorAll("button")[0];
var desineje = document.querySelectorAll("button")[1];
var paslepti = document.querySelectorAll("button")[2];
var nukelti = document.querySelectorAll("button")[3];
var atstatyti = document.querySelectorAll("button")[4];

// Images
var topImage = document.querySelector("#top-img");
var paraImage = document.querySelector("#para-img");

// Paragraphs
var paragraphs = document.querySelector("#paragraphs");

kaireje.addEventListener("click", function () {
    topNoneParaInline();
    paraImage.style.float = "left";
    paragraphs.classList.remove("bg-html");
});

desineje.addEventListener("click", function () {
    topNoneParaInline();
    paraImage.style.float = "right";
    paragraphs.classList.remove("bg-html");
});

paslepti.addEventListener("click", function () {
    displaysNone();
    paragraphs.classList.remove("bg-html");
});

nukelti.addEventListener("click", function () {
    displaysNone();
    paragraphs.classList.add("bg-html");
});

atstatyti.addEventListener("click", function () {
    topImage.style.display = "block";
    paraImage.style.display = "none";
    paragraphs.classList.remove("bg-html");
});

// Functions
function kairejeDesineje() {
    topImage.style.display = "none";
    paraImage.style.display = "inline";
    paragraphs.classList.remove("bg-html");
}

function displaysNone() {
    topImage.style.display = "none";
    paraImage.style.display = "none";
}

function topNoneParaInline() {
    topImage.style.display = "none";
    paraImage.style.display = "inline";
}


