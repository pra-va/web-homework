var form = document.forms["addForm"];
var answerSpan = document.querySelector("#answer");
var fieldOne;
var fieldTwo;
var answer;


form.addEventListener("submit", function (e) {
    e.preventDefault();
    fieldOne = e.target.elements.numberOne.value;
    fieldTwo = e.target.elements.numberTwo.value;
    if (fieldOne & fieldTwo) {
        answer = parseInt(fieldOne) + parseInt(fieldTwo);
        answerSpan.textContent = "Result: " + answer;
    }
});


