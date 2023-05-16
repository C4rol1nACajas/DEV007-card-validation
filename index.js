import validator from "./validator.js";

//Selector de ID: Si es un elemento especifico .getElementById(id) Busca el elemento HTML con el id id. Si no, devuelve Null
const inputFirstName = document.getElementById("txtPrimerNombre");
inputFirstName.addEventListener('keypress', (event) => {      /* Con el método .addEventListener() permite añadir una escucha del evento indicado (primer parámetro: Keypress),
 y en el caso de que ocurra, se ejecutará la función asociada indicada (segundo parámetro). De forma opcional, se le puede pasar un tercer parámetro object con ciertas opciones*/
  const key = event.key; //  Es una función, es constante ya que el valor no va cambiar//La propiedad key devuelve la tecla que se presionó cuando ocurrió el evento. /.
  const regex = /[a-zA-Z]/; // Expresión regular para aceptar solo letras

  if (!regex.test(key)) {
    event.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
  }
});

const inputLastName = document.getElementById("txtApellido");
inputLastName.addEventListener('keypress', (event) => {  /* Funciones flechas:son una forma corta de escribir funciones que aparece en Javascript a partir de ECMAScript 6. 
Básicamente, se trata de reemplazar eliminar la palabra function y añadir => antes de abrir las llaves  */
  const key = event.key;
  const regex = /[a-zA-Z]/; // Expresión regular para aceptar solo letras

  if (!regex.test(key)) {  //If para comprabar si la condición es verdadera 
    event.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
  }
});

const inputNumber = document.getElementById("txtNumeroTarjeta");
inputNumber.addEventListener("keypress", (e) => { //Función flecha:En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>
  if (!onlyNumbers(e)) {
    e.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
  }
});

const inputCvc = document.getElementById("txtCvc");
inputCvc.addEventListener("keypress", (e) => { //Función flecha:En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>
  if (!onlyNumbers(e)) {
    e.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
  }
});
function onlyNumbers(e) {
  const key = e.charCode;
  return key >= 48 && key <= 57;
}

const input = document.getElementById("txtExpDate");
input.addEventListener("input", (event) => {
  let inputValue = event.target.value;  // Let:Declara una variable local en un bloque de ambito, iniciandola opcionalmente un valor. Podra cambiar su valor. 
  inputValue = inputValue.replace(/\D/g, ""); // remueve todo lo que no sea un dígito
  inputValue = inputValue.substring(0, 4); // limita el input a cuatro caracteres
  inputValue = inputValue.replace(/(\d{2})(\d{2})/, "$1/$2"); // agrega la barra después del segundo dígito
  event.target.value = inputValue;
});

const formValidation = document.getElementById("formValidation");
formValidation.addEventListener("submit", () => {  //Función flecha: En el caso de que la función no tenga parámetros, se indica de esta manera: () =>
  const validacion = validator.isValid(
    document.getElementById("txtNumeroTarjeta").value
  );
  const mascara = validator.maskify(
    document.getElementById("txtNumeroTarjeta").value
  );
  if (validacion === true) {                  //If para comprabar si la condición es verdadera 
    alert("tu tarjeta es valida " + mascara);
  } else {                                   //Else para ejecutar una sentencia si la condición es falsa
    alert("tu tarjeta no es valida " + mascara);
  }
});


