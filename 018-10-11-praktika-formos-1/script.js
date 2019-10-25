// Selectors
var form = document.querySelector("#numbersGuessing");

var guess;
var randomNumber = Math.floor(Math.random() * 1000 + 1);
var guessCounter = 0;



form.addEventListener("submit", function(e) {
    e.preventDefault();
    guess = e.target.elements.input.value;
    if(guess > randomNumber) {
        alert("Your guess is to high!");
        e.target.elements.input.value = "";
        guessCounter++;
    } else if(guess < randomNumber) {
        alert("Your guess is to low!");
        e.target.elements.input.value = "";
        guessCounter++;
    } else {
        alert("Congradulations! The number was " + randomNumber + ". It took " + guessCounter + " times for you to guess it. I have a new number for You! Try to guess again!");
        randomNumber = Math.floor(Math.random() * 1000 + 1);
        e.target.elements.input.value = "";
    }
})

 