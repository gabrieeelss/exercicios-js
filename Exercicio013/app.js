let numeroDeVagas = []
let veiculos = []

function fnSalvarVeiculo() {
    numeroDeVagas.push(document.getElementById("numero_vaga").value)
    veiculos.push(document.getElementById("veiculo").value)

}

function fnListarVeiculos() {
   document.getElementById("tabela_veiculos").innerHTML = ""
    for(let i = 0; i < veiculos.length; i++){
        document.getElementById("tabela_veiculos").innerHTML +=`<tr>`
        document.getElementById("tabela_veiculos").innerHTML +=`<td> ${numeroDeVagas[i]} </td><td> ${veiculos[i]}</td>`
        document.getElementById("tabela_veiculos").innerHTML +=`</tr>`
    }
}

function fnLimpar(){}