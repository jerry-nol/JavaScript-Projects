function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? 'You are too short':" You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
// Function That Checks if old enough to vote 
function Vote() {
    var Age, Voting;
    Age = document.getElementById("Age").value;
    Voting = (Age < 18) ? 'You are too young':"You are now allowed";
    document.getElementById("Vote").innerHTML = Voting + " to vote"
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "Mustard")
var Erik = new Vehicle("Ford", "Pinto", 1971, "White and Black")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML= "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
// added a new person with their vehicle
var Jane = new Vehicle ("Nissan", "Titan", 2011, "Black" )
function news() {
    document.getElementById("New_and_This").innerHTML = "Jane has a " + Jane.Vehicle_Year + " " +Jane.Vehicle_Make + " " + Jane.Vehicle_Model
}

function Group(First, Last, Age, Gender) {
    this.First = First;
    this.Last = Last;
    this.Age = Age;
    this.Gender = Gender;
}
// Adding variables
var Bob = new Group("Bob", "Jones", 45, "Male")
var Kate = new Group("Kate", "James", 26, "Female")
function names() {
    document.getElementById("names").innerHTML = "Bob's full name is " + Bob.First + " " + Bob.Last + ", he is a " + Bob.Age + " year old " + Bob.Gender
}

function Nest() {
    document.getElementById("Nested_Function").innerHTML = adding()
    function adding() {
        var count = 10; // counter starts and 10
        function add() {count += 9;} // adding 9 to the counter
        add();  
        return count; // returns the total amount
    }
}