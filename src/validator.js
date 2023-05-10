const validator = {
  isValid: function(creditCardNumber) {
    //alert("Tu número de tarjeta es: "+creditCardNumber);
    // Convierte el número en un array y lo invierte
    const digits = creditCardNumber.toString().split('').map(Number).reverse();

    // Variable para almacenar la suma de los dígitos
    let sum = 0;

    // Itera por cada dígito del número
    for (let i = 0; i < digits.length; i++) {
      // Si el índice es impar, duplica el dígito
      if (i % 2 === 1) {
        digits[i] *= 2;
        // Si el doble es mayor que 9, resta 9
        if (digits[i] > 9) {
          digits[i] -= 9;
        }
      }
      // Agrega el dígito a la suma
      sum += digits[i];
    }

    // El número es válido si la suma es divisible por 10
    if(sum % 10 === 0) {
      return true
    }
    else {
      return false
    }
  },
  maskify: function(creditCardNumber) {
    // Si el número es menor o igual a 4 caracteres, no lo modifica
    if (creditCardNumber.length <= 4) {
      return creditCardNumber;
    }
    // Obtiene los últimos 4 caracteres del número
    const lastFourDigits = creditCardNumber.slice(-4);
    /* Genera una cadena de caracteres del mismo largo que el número original,
     pero con los últimos 4 caracteres reemplazados por # */
    return '#'.repeat(creditCardNumber.length - 4) + lastFourDigits; }}  
export default validator;
