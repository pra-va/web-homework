var btn = document.querySelectorAll("button");



btn[0].addEventListener("click", function(){
    document.querySelector("form").classList.remove("visible");
});

btn[1].addEventListener("click", function(){
    alert("Dėkojame už Jūsų nuomonę.");
    document.querySelector("form").classList.add("visible");
});