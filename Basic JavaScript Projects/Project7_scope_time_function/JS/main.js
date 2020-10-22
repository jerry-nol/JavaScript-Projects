var o = 3   // Setting the global varible to 3 // global because it is outside of any function
function adding() {
    document.write(2 + o + " ");
}
function add() {
    document.write(5 - o);
}
adding();
add()

function Adding() {
    var p = 9 // Setting the local varible to 9 // local because it is inside of a function
    console.log(7 + p);
}
function Add() {
    console.log(9- p);
}
Adding()
Add()

function date() {
    if (new Date().getHours() < 16) { // If time is greater than 4pm
        document.getElementById("date").innerHTML = "Hanging in there?";
    }
}

function myIf() {
     Time = new Date().getTime(); 
    if (Time > 20) { // if time is greater than 8pm 
        document.getElementById("myIf").innerHTML = "Good Night " + Time
    }
}

// Must be of age 21, any younger is not welcome
function old_enough() {
    age = document.getElementById("age").value
    if (age >= 21) {
        Enter = "You are welcome to come in."
    }
    else { 
        Enter = "You are not old enough yet."
    }
    document.getElementById("old_enough").innerHTML = Enter;
}

function Time_function() {
    Time = new Date().getHours()
    var Reply;
    if (Time < 12 == Time > 0) { // If time is between 12am and 12pm its morning
        Reply = "It is morning time!"; 
    }
    else if ( Time > 12 == Time < 18) { // If time is between 12pm and 6pm it is afternoon
        Reply = "It is afternoon time!";
    }
    else {
        Reply = "It is evening time!" // anything after 6pm its evening
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}