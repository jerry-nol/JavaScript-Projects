function validateForm() {
    var x = document.forms["myForm"]["phone"].value;
    if (x == "") {
      alert("All fields must be filled out");
      return false;
    }
  }

  function openForm() {
    document.getElementById("form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("form").style.display = "none";
  }