function count_down() {
    var seconds = document.getElementById("seconds").value

    function tick() {
        seconds = seconds - 1;
        timers.innerHTML = seconds;
        setTimeout(tick, 1000);
    if (seconds == -1) {
        alert("Time is up!")
    }
        }
    tick()
}