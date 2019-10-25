var image = document.querySelector("img");

//image.classList.toggle("smaller")

var padidinti = document.querySelectorAll(".myButton");

padidinti[0].addEventListener("click", function(){
    image.classList.remove("smaller");
});

padidinti[1].addEventListener("click", function(){
    image.classList.add("smaller");
});