
function updateLabel() {
  var rangeInput = document.getElementById("credit_social");
  var socialValue = document.getElementById("credit_social_value");
  socialValue.textContent = rangeInput.value;
}

function updateColor(event) {
  var selectedColor = event.target.value; 
  localStorage.setItem("culoare", selectedColor);
  document.querySelector('body').style.backgroundColor = selectedColor;
}

function validateForm() {
  var numeInput = document.getElementById("nume");
  if (numeInput.value === "") {
    // Valoare lipsă pentru câmpul "Nume"
    alert("Vă rugăm să completați câmpul Nume.");
    return;
  }

  var idInput = document.getElementById("id");
  if (idInput.value === "") {
    // Valoare lipsă pentru câmpul "ID unic"
    alert("Vă rugăm să completați câmpul ID unic.");
    return;
  }

  var rasaSelect = document.getElementById("rasa");
  if (rasaSelect.value === "") {
    // Valoare lipsă pentru câmpul "Rasă"
    alert("Vă rugăm să selectați o opțiune pentru câmpul Rasă.");
    return;
  }

  var dataNasteriiInput = document.getElementById("data_nasterii");
  if (dataNasteriiInput.value === "") {
    // Valoare lipsă pentru câmpul "Data nașterii"
    alert("Vă rugăm să completați câmpul Data nașterii.");
    return;
  }
  
  alert("Formular trimis!");
}

window.onload = function() {
  // credit social
  document.getElementById("credit_social").addEventListener("change", updateLabel);

  // color input
  var colorInput = document.getElementById('culoare');
  colorInput.addEventListener('change', updateColor); 
  colorInput.value = localStorage.getItem("culoare");
  document.querySelector('body').style.backgroundColor = colorInput.value;

  // trimitere cerere
  document.getElementById("butonCerere").addEventListener("click", validateForm);
}

