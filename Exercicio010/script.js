function fnCalcularMedia() {
    let nome = "", n1 = 0, n2 = 0, n3 = 0, n4 = 0, media = 0

    nome = document.getElementById("nome").value
    n1 = parseFloat(document.getElementById("nota1").value)
    n2 = parseFloat(document.getElementById("nota2").value)
    n3 = parseFloat(document.getElementById("nota3").value)
    n4 = parseFloat(document.getElementById("nota4").value)
    media = (n1 + n2 + n3 + n4) / 4

    document.getElementById("nome_resultado").innerHTML = nome
    document.getElementById("media").innerHTML = media.toFixed(1)
    fnExibir("resultado")
}

function fnExibir(painel_exibir) {
    let painel = document.getElementById("painel_resultado")
    let painel2 = document.getElementById("painel_formulario")
    // garante que só a classe "show" fique aplicada
    painel.classList.add("close")
    painel2.classList.add("close")

    if(painel_exibir == "resultado"){
        painel.classList.remove("close")
        painel.classList.add("show")
    }else if(painel_exibir == "formulario"){
        painel2.classList.remove("close")
        painel2.classList.add("show")
        fnLimparCampos()
    }
}

function fnLimparCampos() {
    document.getElementById("painel_formulario").reset()
    fnExibir("formulario")
}
