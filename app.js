var ninetiethBirthday = 90;

var age = prompt("what is your age?");

function timeRemaining(age) {
    var yearsUntil = (ninetiethBirthday - age);
    var days = yearsUntil * 365;
    var weeks = yearsUntil * 52;
    var months = yearsUntil * 12;
    return "You have " + days +" days, or "
            + weeks + " weeks, or "
            + months + " months until your ninettieth birthday.";
}

alert(timeRemaining(age));
console.log(timeRemaining(age));




