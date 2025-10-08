function fnCalcular() {
    let valor1 = 0, valor2 = 0, resultado = 0
    valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)

    let operacao = document.querySelector('input[name="operacao"]:checked')?.value

    // if (document.getElementById("adicao").checked) { 
    //     resultado = valor1 + valor2; 
    // } else if (document.getElementById("subtracao").checked) {
    //     resultado = valor1 - valor2;
    // } else if (document.getElementById("multiplicacao").checked) {
    //     resultado = valor1 * valor2; 
    // } else if (document.getElementById("divisao").checked) {
    //     resultado = valor1 / valor2; 
    // }

    switch (operacao) {
        case "adicao":
            resultado = valor1 + valor2
            break
        case "subtracao":
            resultado = valor1 - valor2
            break
        case "multiplicacao":
            resultado = valor1 * valor2
            break
        case "divisao":
            resultado = valor1 / valor2
            break
    }

    document.getElementById("resultado").innerHTML = resultado
}