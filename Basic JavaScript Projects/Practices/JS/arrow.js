var arrow

arrow = () => "Hello, World"
document.getElementById("arrow").innerHTML = arrow()

var nums = [50, 78, 3, 99, 6]
var someOver78 = nums.some(myNums);

document.getElementById("nums").innerHTML = "Some over 78 is " + someOver78;

function myNums(value, index, array) {
    return value > 78
}
