function fnCalcular() {
    let valor = parseFloat(document.getElementById("valor-conta").value);
    let porcentagem = parseFloat(document.getElementById("porcentagem").value);
    let tipo = document.getElementById("tipo").value
    let resultado = document.getElementById("resultado")

    if (isNaN(valor) || isNaN(porcentagem)) {
        resultado.textContent = "Por favor, inserir um valor válido.";
        return;
    }

    let valorFinal;

    if (tipo === "desconto") {
        valorFinal = valor - (valor * (porcentagem / 100));
    } else if (tipo === "acrescimo") {
        valorFinal = valor + (valor * (porcentagem / 100));
    }

document.getElementById("resultado").innerHTML = `<h2>R$ ${valorFinal.toFixed(2)}</h2>`;

}
function fnLimpar(){
    document.getElementById('formulario').reset()
}
document.getElementById('btCalcular').addEventListener('click',function(){
    fnLimpar()
})