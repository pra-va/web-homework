var formKmi = document.querySelector("#kmiForm")
var mass;
var height;

var spanAnswer = document.querySelector("#answer");


formKmi.addEventListener("submit", function (e) {
    e.preventDefault();
    mass = formKmi["mass"].value;
    height = formKmi["height"].value;
    if(!mass & !height) {
       alert("You have not entered your height and weight!");
        return;
    } else if(!mass) {
        alert("You have not entered your mass!");
        return;
    } else if(!height) {
        alert("You have not entered your height!");
        return;
    } else if(height <= 0) {
        alert("Your height can not be a negative number.");
        return;
    } else if(mass <= 0) {
        alert("Your mass can not be a negative number.");
        return;
    } else if(height <= 20) {
        alert("Are You really that small?");
        return;
    } else if(mass <= 10) {
        alert("Are You really that light?");
        return;
    }
    
    spanAnswer.textContent = calculateBmi(mass,height);
});

function calculateBmi(weight, height) {
    var bmi = (weight / height / height * 10000).toFixed(2);
    
    if (bmi < 18.5) {
        return "BMI: " + bmi + ". Your weight is to small."
    } else if (bmi <= 25) {
        return "BMI: " + bmi + ". Your weight is normal."
    } else if (bmi <= 30) {
        return "BMI: " + bmi + ". Your are overweight."
    } else if (bmi > 30) {
        return "BMI: " + bmi + ". Your are obese."
    }
}
