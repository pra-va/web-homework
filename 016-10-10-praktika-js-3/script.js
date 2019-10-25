var image = document.querySelector("img");
var buttons = document.querySelectorAll(".myButton");

image.setAttribute("src", "IMG/1200px-HTML5_logo_and_wordmark.svg.png");

buttons[0].addEventListener("click", function(){
    image.setAttribute("src", "IMG/1200px-HTML5_logo_and_wordmark.svg.png");
});

buttons[1].addEventListener("click", function(){
    image.setAttribute("src", "IMG/html5-2-logo-png-transparent.png");
});