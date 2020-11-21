function get_todos() {
    var todos = new Array; // Creates an array of tasks that are inputed
    var todos_str = localStorage.getItem('todos'); // this pulls the task that was saved in the web browser memory
    if (todos_str !== null) {  //if the input is not null then JSON.parse will communicate with the web browser to
        // make the task a JavaScript object 
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//This function adds the inputed task to the get_todos function array
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task); // this adds a new task at the end of the array
    localStorage.setItem("todo", JSON.stringify(todos)); // This converts the task input to a JSON string
    document.getElementById("task").value = "";
    show();

    return false;
}

function show() { // Thhis will keep the task permanetly displayed on the screen 
    var todos = get_todos();
    var html = '<ul>'; // this sets up each task as an unordered list
    for (var i = 0; i < todos.length; i++) { //This displays a task to the list in the order that it is inputed
        //This "html+=" also displays as a list and creates the button with the "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    
    };
    html += '</ul>';
    //This displays the task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove')
    for (var i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener('click', remove)
    };
}

//this displays the inputed task when the 'ADD ITEM' button is clicked 
document.getElementById('add').addEventListener('click', add);
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    show();

    return false;
}