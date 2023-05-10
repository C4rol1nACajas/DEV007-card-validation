import validator from "./validator.js";

const inputNumber = document.getElementById("txtNumeroTarjeta");
inputNumber.addEventListener("keypress", (e) => {
  if (!onlyNumbers(e)) {
    e.preventDefault();
  }
});
const inputCvc = document.getElementById("txtCvc");
inputCvc.addEventListener("keypress", (e) => {
  if (!onlyNumbers(e)) {
    e.preventDefault();
  }
});
function onlyNumbers(e) {
  const key = e.charCode;
  return key >= 48 && key <= 57;
}
const formValidation = document.getElementById("formValidation");
formValidation.addEventListener("submit", () => {
  const x = validator.isValid(
    document.getElementById("txtNumeroTarjeta").value
  );
  const mascara = validator.maskify(
    document.getElementById("txtNumeroTarjeta").value
  );
  if (x === true) {
    alert("tu tarjeta es valida " + mascara);
  } else {
    alert("tu tarjeta no es valida " + mascara);
  }
});
// Obtener el elemento input
const input = document.getElementById('txtExpDate');
input.addEventListener('input', (event) => {
  let inputValue = event.target.value;
  inputValue = inputValue.replace(/\D/g,''); // remueve todo lo que no sea un dígito
  inputValue = inputValue.substring(0,4); // limita el input a cuatro caracteres
  inputValue = inputValue.replace(/(\d{2})(\d{2})/,'$1/$2'); // agrega la barra después del segundo dígito
  event.target.value = inputValue;
});
