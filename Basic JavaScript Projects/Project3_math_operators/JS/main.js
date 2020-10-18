function myFunction() {
    var add = 9 + 8;
    document.getElementById("math").innerHTML = "9 + 8 =" + add;
}

function subFunction() {
    var sub = 9 - 8;
    document.getElementById("mathematics").innerHTML = "9 - 8 =" + sub;
}

function multFunction() {
    var mult = 9 * 8;
    document.getElementById("multiply").innerHTML = "9 * 8 =" + mult;
}

function divFunction() {
    var div = 90 - 9;
    document.getElementById("divide").innerHTML = "90 / 9 =" + div;
}

function moreFunctions() {
    var math = (8 + 9 - 7) * 10 / 2
    document.getElementById("problem").innerHTML = "8 plus 9, minus 7, then multiplied by 10 and divided by 2 equals " + math;
}

function modulus() {
    var more_math = 10 % 3;
    document.getElementById("modulusF").innerHTML = "The remainder of 10 when its divided by 3 is: " + more_math;
}

function operand() {
    var op = 98; // displaying the positive number of 98 into a negetive 98
    document.getElementById("oper").innerHTML = -op; 
}

var j = 9;
j++; // Bringing the 9 up by one number
document.write (j) ;

var p = 10;
p--; // Bringing the 10 down by one number
document.write (p) ;

window.alert(Math.random()* 100);// this displays a random number is an alert pop up 

function rnd() {
    document.getElementById("round").innerHTML = Math.round(1.8);// This rounds 1.8 to 2
}