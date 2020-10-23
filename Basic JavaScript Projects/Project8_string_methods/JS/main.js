// Concatenating strings
function conc() {
    var one = "This is one";
    var two = " sentence that's ";
    var three = " going to be ";
    var four = " concatenated for practice";
    var whole = one.concat(two, three, four);
    document.getElementById("conc").innerHTML = whole;
}

function slice() {
    var sent = "We will be using the slice method here!"
    var sec = sent.slice(21, 33) // Displays whats in between these two values
    document.getElementById("slice").innerHTML = sec;
}

function upper() {
    var str = "hello, world!"
    var up = str.toUpperCase();
    document.getElementById("upper").innerHTML = up; // Makes letter all uppercase
}

function search() {
    var ser = "trying out the search method"
    var find = ser.search("search")
    document.getElementById("search").innerHTML = find; // searches a string for a specified value
}

function strng() {
    var B =167;
    document.getElementById("strng").innerHTML = B.toString(); // displays the number as a string
}

function pre() {
    var g = 82364.4729562047583
    document.getElementById("pre").innerHTML = g.toPrecision(8); // Formats a number to a specific lenth
}

function fix() {
    var num = 43.8462
    document.getElementById("fix").innerHTML = num.toFixed(2) // Formats the decimals to a specific lenth
}

function val() {
    var T = 13 + 5; 
    document.getElementById("val").innerHTML = T.valueOf(); // Gives the value of varible T
}