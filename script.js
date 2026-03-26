function verificarmassacorporal() {
    let peso= document.getElementById("altura").value;
    let altura= document.getElementById("peso").value;


    let imc = peso / (altura * altura);


    if (imc >18.5) { 
        resultado.textContent = " O número é abaixo do peso";
        resultado.className = "abaixo do peso";
    }

    else if (imc >= 18.5 && imc < 25) {
        resultado.textContent = " O número é peso normal";
        resultado.className = "normal";
    }

    else if (imc >= 25 && imc < 30) {
        resultado.textContent = " O número é sobrepeso";
        resultado.className = "sobrepeso";
    }

    else if  (imc >30) { 
          resultado.textContent = "o número obesidade"
          resultado.className = " obesidade"
    }
}