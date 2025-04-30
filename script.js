const datoEntrada = document.getElementById("fibonacci");
const button = document.getElementById("calcular");
const result = document.getElementById("resultado");

button.addEventListener("click", () => { 
    const numDate = parseInt(datoEntrada.value);

    if (isNaN(numDate) || numDate < 0) {
        result.textContent = "Por favor, ingrese un número válido."
        result.style.color = "red"
        return;
    } 
       
    let fibonacci = [];
    if (numDate === 0) {
        fibonacci = [0];
        result.textContent = `La serie de Fibonacci hasta el número ${numDate} es: ${fibonacci.join(",")}.`;
        result.style.color = "black"
    } else if (numDate === 1) {
        fibonacci = [0, 1];
        result.textContent = `La serie de fibonacci hasta el número ${numDate} es: ${fibonacci.join(",")}.`;
        result.style.color = "black"
    } else {
        fibonacci = [0, 1];
        for (let num = 2; num < numDate; num++) {
            fibonacci.push(fibonacci[num - 1] + fibonacci[num - 2]);
            result.style.color = "black"
        }
        result.textContent = `La serie de Fibonacci hasta el número ${numDate} es: ${fibonacci.join(", ")}.`;
    }
    });
