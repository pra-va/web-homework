var listOfFields = document.querySelectorAll("div div:nth-child(2) h2");
console.log(listOfFields);
var portraitImage = document.querySelector("img");


var apiRequest = new XMLHttpRequest();
apiRequest.open('GET', 'https://randomuser.me/api');
apiRequest.onload = function () {
    var data = JSON.parse(apiRequest.responseText);
    listOfFields[0].textContent = data.results[0].name.first + " " + data.results[0].name.last;
    listOfFields[1].textContent = data.results[0].location.city;
    listOfFields[2].textContent = data.results[0].dob.age;
    listOfFields[3].textContent = data.results[0].email;
    listOfFields[4].textContent = data.results[0].phone;
    portraitImage.setAttribute("src", data.results[0].picture.large);
}

apiRequest.send();
