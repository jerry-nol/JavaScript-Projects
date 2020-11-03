// Making a function to choose a chocolate bar 
function candy_function() {
    var candy_output;
    var candys = document.getElementById("candy_input").value
    var candy_str = " is a great chocolate!" // A string to go with the chocolate of their choosing
    switch(candys) {
        case "Snickers" :
            candy_output = "Snickers " + candy_str
        break;
        case "Reese's" :
            candy_output = "Reese's " + candy_str
        break;
        case "Twix" :
            candy_output = "Twix " + candy_str
        break;
        case "Milky Way" :
            candy_output = "Milky Way " + candy_str
        break;
        case "Kit Kat" :
            candy_output = "Kit Kat " + candy_str
        break;
        case "Crunch" :
            candy_output = "Crunch " + candy_str
        break;
        case "Hersey's" :
            candy_output = "Hersey's " + candy_str
        break;
        default:
        candy_output = "Please select one from the list above and written exactly" // If chocolate is not in list or misspelled display this 
    }
    document.getElementById("Output").innerHTML = candy_output;
}

function here() {
    var D = document.getElementsByClassName("here"); // selecting the class name 
    D[2].innerHTML = "The text has changed!" // setting the index value of A  
}


var g = document.getElementById("fade");
var tx = g.getContext("2d");

var grd = tx.createLinearGradient(0,0,120,100);
grd.addColorStop(0, "blue")
grd.addColorStop(1, "grey");

tx.fillStyle = grd;
tx.fillRect(20,20,150,100)