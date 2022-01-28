function compute() {
    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if (amount == "") {
        alert("Amount must be filled out");
        document.getElementById("amount").focus();
        return false;
    } else if (amount < 1) {
        alert("Amount must be a positive number");
        document.getElementById("amount").focus();
        return false;
    } else if (rate == "") {
        alert("Interest Rate must be filled out");
        document.getElementById("rate").focus();
        return false;
    } else if (years == "") {
        alert("No. of Years must be filled out");
        document.getElementById("years").focus();
        return false;
    }else if (years < 1) {
        alert("No. of Years must be a positive number");
        document.getElementById("years").focus();
        return false;
    } else {
    const date = new Date();
    var currentYear = date.getFullYear();
    document.getElementById("result").innerHTML = 
        "If you deposit <span class='highlight'>" + amount + "</span>,\n" +
        "at an interest rate of <span class='highlight'>" + rate + "%</span>.\n" +
        "You will receive an amount of <span class='highlight'>" + (amount*rate/100)*years + "</span>,\n" +
        "in the year <span class='highlight'>" + (currentYear+Number(years)) + "</span>";
    }
}
        
function showRate() {
    document.getElementById("showRate").innerHTML =
        document.getElementById("rate").value.toString() + "%";
}