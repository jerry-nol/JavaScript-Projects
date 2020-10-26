// Making the loop count up to 14
function Call_Loop() {
    var count = ""
    var num = 1;
    while (num < 15) {
        count += "<br>" + num;
        num++;
    }
    document.getElementById("loop").innerHTML = count;
}

// Counting the lenth of a string
function len() {
    var H = "The length of the string in this varible will display on screen";
    var L = H.length
    document.getElementById("len").innerHTML = L;
}


// This will display all instruments in the array 
var instruments = ["Guitar", "Clarinet", "Trumpet", "Drums", "Tuba", "Flute", "Violin"];
var content = "";
var G;
function for_loop() {
    for (G = 0; G < instruments.length; G++) {
        content += instruments[G] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_function() { // setting and a array of numbers 
    var number = [];
    number[0] = 4
    number[1] = 2
    number[2] = 0
    number[3] = 9
    document.getElementById("array").innerHTML = "The numbers in my array are: " + number[0] + ", " + number[1] + ", " +
        number[2] + ", " + number[3]
}

const wood_wind = { type: "Clarinet", brand: "Buffet", style: "R13" }; //Const defines a constant reference to a value but the property can be changed
function constant_function() { 
    wood_wind.price = "$3,100"
    wood_wind.style = "E13"
    document.getElementById("constant").innerHTML = "This " + wood_wind.type + " is a " + wood_wind.brand + " " + wood_wind.style + ". The price of it is " + wood_wind.price
}

// LET lets the varible to be changed for a local function but stay the same outside of it 
var k = 250;
document.getElementById("let1").innerHTML = k
{
    let k = 550;
    document.getElementById("let2").innerHTML = k
}
document.getElementById("let3").innerHTML = k

var n = square(9, 7)
function square(a, b) {
    return a * b
}
document.getElementById("square").innerHTML = n

let car = {
    Make: "Honda",
    Model: "Civic",
    SubModel: "SI",
    Year: 2012,
    Color: "red",
    description: function () {
        return "This is a " + this.Color + " " + this.Make + " " + this.Model + " " + this.SubModel + ", made in the year " + this.Year
    }
};
document.getElementById("car").innerHTML = car.description();

var str = ""
var n;
for (n = 0; n < 5; n++) {
    if (n === 3) {break;} // the break is used to jump out of the loop
    str += "Add one and the number " + n + "<br>";
}
document.getElementById("break").innerHTML = str

var strg = "";
var r;
for (r = 0; r < 5; r++) {
    if (r === 2) {continue;} // the continue is used to skip only one iteration
    strg += "Add one and the number is " + r + "<br>";
}
document.getElementById("continue").innerHTML =strg