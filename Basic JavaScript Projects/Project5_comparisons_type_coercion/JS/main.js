document.write(typeof 9)

function here() {
    document.getElementById("testing").innerHTML = 0/0
}

function ok() {
    document.getElementById("more_testing").innerHTML = isNaN('98745') // Display whether 98745 is a number
}

function hmm() {
    document.getElementById("more_test").innerHTML = isNaN('Hello, World!') // Display whether Hello, World is a number
}

document.write (-6E315) // display -Infinity

document.write (2E400) // Display Infinity

function Bool() {
    document.getElementById("Boolean").innerHTML = 10 > 678 // The answer will be false 
}

console.log(8 + 3) // On the console it will display the answer

function coercion() {
    document.getElementById("coercion").innerHTML = "ten" + 6 // This attaches ten and 6 together
}

function tru() {
    document.getElementById("true").innerHTML = 8 == 5 + 3; // Displays True or False statement depending on the answer 
}


function flse() {
    document.getElementById("false").innerHTML = 10 == 11
}

console.log(8 < 5) // Displays True or False statement depending on the answer in console

function same() {
    var x = 67;
    var p = 67
    document.getElementById("same").innerHTML = x === p
}
function diff_data() {
    var m = 67;
    var n = "80"
    document.getElementById("diff_data").innerHTML = m === n
}

function diff_val() {
    var b = 67
    var x = "67"
    document.getElementById("diff_val").innerHTML = b === x
}

function same_data() {
    var t = "68"
    var h = "69"
    document.getElementById("same_data").innerHTML = t ===h
}

function AND() {
    document.getElementById("And").innerHTML = 7 < 10 && 9 < 10; // "&&" varifies that BOTH values are true
}

function OR() {
    document.getElementById("Or").innerHTML = 1 < 2 || 2 < 1; //"||" varifies that one OR the other values are true
}

function And() {
    document.getElementById("AND").innerHTML = 7 < 10 && 10 < 9;
}

function Or() {
    document.getElementById("OR").innerHTML = 3 < 2 || 2 < 1;
}

function NOT() {
    document.getElementById("NOT").innerHTML = !(30 < 300); // "!" checks whether the value is true or not
}

function not() {
    document.getElementById("not").innerHTML = !(30 > 300);
}