// Document selectors.
var form = document.querySelector("#bank-form");
var list = document.querySelector("#unordered-list");
var moneyBalance = document.querySelector("#balance");
var warningWindow = document.querySelector("#warning");
var sortForm = document.querySelector("#ok");

var sortUp = document.querySelector("#sortUp");
var sortDown = document.querySelector("#sortDown");
var filter = document.querySelector("#filter");
var reset = document.querySelector("#reset")

// Important global variables.
var transactionList = [["+", 1500, "Atlyginimas"], ["-", 500, "Nuomai"], ["-", 100, "Kasdienėms išlaidoms"], ["+", 40, "Už vakarienę"], ["+", 500, "Už laimėtą turnyrą"], ["-", 10.20, "Apsipirkimas prekybos centre"], ["-", 150.99, "Nauja badmintono raketė"]];
let tempList = [];
var balance = 0;


renewBalance();
restartList(transactionList);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ammount = e.target.elements.action.value;
    let purpose = e.target.elements.purpose.value;
    let selectOption = e.target.elements.select.value;


    if (ammount === "" || purpose === "") {
        warningWindow.textContent = "Veiksmo arba paskirties laukai yra tušti.";
        return;
    }

    if (selectOption === "Papildyti") {
        if (renewBalance(ammount)) {
            renewForm("+", ammount, purpose, e);
            addListItem(ammount, purpose);
        }
    } else {
        if (renewBalance(-ammount)) {
            renewForm("-", ammount, purpose, e);
            addListItem(-ammount, purpose);

        } else {
            return;
        }
    }
});

sortForm.addEventListener("submit", (e) => {
    isRestartList = false;
    e.preventDefault();
    tempList = [...transactionList];
    transactionList = [];
    let fromAmmount = e.target.elements.fromAmmount.value;
    let toAmmount = e.target.elements.toAmmount.value;
    if (fromAmmount > toAmmount) {
        warningWindow.textContent = "Sumaišyta \"Nuo...\" ir \"Iki\" laukai.";
        return;
    }
    list.innerHTML = "";
    for (i = 0; i < tempList.length; i++) {
        if (Number(tempList[i][0] + tempList[i][1]) <= toAmmount && Number(tempList[i][0] + tempList[i][1]) >= fromAmmount) {
            transactionList.push(tempList[i]);
        }
    }
    for (i = 0; i < transactionList.length; i++) {
        if(transactionList[i][0] === "-") {
            addListItem(-transactionList[i][1], transactionList[i][2]);
        } else {
            addListItem(transactionList[i][1], transactionList[i][2]);
        }
    }
    console.log(transactionList);
    
    sortForm.classList.add("d-none");
    sortUp.classList.add("d-none");
    sortDown.classList.add("d-none");
    filter.classList.add("d-none");
    reset.classList.remove("d-none");
});

reset.addEventListener("click", (e) => {navigator.appName  
   e.preventDefault();
    list.innerHTML = "";
    transactionList = [];
    transactionList = [...tempList];
    for (i=0; i<transactionList.length; i++) {
        if(transactionList[i][0] === "-") {
            addListItem(-transactionList[i][1], transactionList[i][2]);
        } else {
            addListItem(transactionList[i][1], transactionList[i][2]);
        }
        
    }
    renewBalance;
    sortUp.classList.remove("d-none");
    sortDown.classList.remove("d-none");
    filter.classList.remove("d-none");
     reset.classList.add("d-none");
});

sortUp.addEventListener("click", () => {
    list.innerHTML = "";
    balance = 0;
    let moneyIn = [];
    let moneyOut = [];
    for (i = 0; i < transactionList.length; i++) {
        if (transactionList[i][0] === "+") {
            moneyIn.push(transactionList[i]);
        } else {
            moneyOut.push(transactionList[i]);
        }
    }

    moneyIn.sort(sortArray);
    moneyOut.sort(sortArray);

    balance = 0;

    restartList(moneyIn);
    restartList(moneyOut);
});

sortDown.addEventListener("click", () => {
    list.innerHTML = "";
    balance = 0;
    let moneyIn = [];
    let moneyOut = [];
    for (i = 0; i < transactionList.length; i++) {
        if (transactionList[i][0] === "+") {
            moneyIn.push(transactionList[i]);
        } else {
            moneyOut.push(transactionList[i]);
        }
    }

    moneyIn.sort(reverseSortArray);
    moneyOut.sort(reverseSortArray);

    balance = 0;

    restartList(moneyIn);
    restartList(moneyOut);
});

filter.addEventListener("click", () => {
    sortForm.classList.remove("d-none");
});

function renewBalance(ammount = 0) {
    if (ammount >= 0) {
        balance = Number(balance) + Number(ammount);
        moneyBalance.textContent = Math.round(balance * 100) /100;
        warningWindow.textContent = "";
        return true;
    }

    if (-ammount <= balance) {
        balance = Number(balance) + Number(ammount);
        moneyBalance.textContent = Math.round(balance * 100) /100;
        warningWindow.textContent = "";
        return true;
    } else {
        warningWindow.textContent = "Nepakanka lėšų banko sąskaitoje.";
        return false;
    }
}

function addListItem(ammount, purpose) {
    var node = document.createElement("LI");
    node.classList.add("list-group-item");
    var textNode = document.createTextNode(ammount + " " + purpose);
    node.appendChild(textNode);
    if (ammount > 0) {
        node.classList.add("list-group-item-info");
    } else {
        node.classList.add("list-group-item-danger");
    }
    list.appendChild(node);
}

function renewForm(sign, ammount, purpose, e) {
    transactionList.push([sign, ammount, purpose]);
    e.target.elements.action.value = "";
    e.target.elements.purpose.value = "";
}

function restartList(list) {
    for (i = 0; i < list.length; i++) {
        if (list[i][0] === "-") {
            addListItem(-list[i][1], list[i][2]);
            balance -= Number(list[i][1]);
        } else {
            addListItem(list[i][1], list[i][2]);
            balance += Number(list[i][1]);
        }
        console.log(balance);
    }
    renewBalance();
}

function sortArray(a, b) {
    return a[1] - b[1];
}

function reverseSortArray(a, b) {
    return b[1] - a[1];
}
