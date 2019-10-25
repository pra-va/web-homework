var buttons = document.querySelectorAll(".change-collor");
var p = document.querySelector("p");

buttons[0].addEventListener("click", function(){
    p.style.color = "yellow";
})

buttons[1].addEventListener("click", function(){
    p.style.color = "green";
})

buttons[2].addEventListener("click", function(){
    p.style.color = "red";
})
