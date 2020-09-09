

// Hobbies
document.getElementById("insertItemHobbies").addEventListener("click", function(event){
  event.preventDefault();

  var input = document.getElementById("inputHobbies");

  var textNode = document.createTextNode(input.value);
  var li = document.createElement("LI");
  li.appendChild(textNode);
  document.getElementById("hobbieList").appendChild(li);

  input.value = "";
});

// Class
document.getElementById("insertItemClass").addEventListener("click", function(event){
  event.preventDefault();

  var input = document.getElementById("inputClass");

  var textNode = document.createTextNode(input.value);
  var li = document.createElement("LI");
  li.appendChild(textNode);
  document.getElementById("classList").appendChild(li);

  input.value = "";
});