var P ="Print these words.";
var O = "These words will be grey";
var O = O.fontcolor("grey") // O var will display grey
document.write (O);

function myFunction1() {
    var s = "learning JS"; // setting varible s a value
    s += " is going to be tough"; // concatenating
    document.getElementById("learn").innerHTML = s;
}

function myFunction(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("fun").innerHTML = myFunction(4, 3);