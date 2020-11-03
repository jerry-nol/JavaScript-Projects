function val() {
    var x = document.forms["vali"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }