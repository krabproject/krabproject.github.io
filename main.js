function validateForm() {
    var input = document.forms["myForm"]["cmd"].value;
    if (input == "") {
      alert("no");
      return false;
    } else {
      const tag = document.createElement("p");
      const text = document.createTextNode(input); 
      tag.appendChild(text);
      var element = document.getElementsByTagName("body")[0];
      element.appendChild(tag);
      document.querySelector('input').value=''
    }
  }