var flightValidationForm = document.querySelector("#flightValidationForm");

class FlightInfo {
    constructor(email, flightCode, from, destination) {
        this.email = email;
        this.flightCode = flightCode;
        this.from = from;
        this.destination = destination;
    }
}

var flights = [new FlightInfo('justina@gmail.com', 123456, "Vilnius", "Barcelona"), 
                new FlightInfo("varaneckas@gmail.com", 123456, "Vilnius", "Barcelona"),
                new FlightInfo("rutela123@gmail.com", 123456, "Vilnius", "Barcelona")];

flightValidationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let flightFound = flights.find(element => 
        (element.email === event.target.elements.email.value && 
        element.flightCode == event.target.elements.flightCode.value));
    if (flightFound) {
        alert(flightFound.from + " \u2708 " + flightFound.destination);
    } else {
        alert("Please check your email or registration code.")
    }
});