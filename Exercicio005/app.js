function fnVerificarPeriodo(){
    let periodoSelecionado = document.getElementById("periodo").value 

    // document.getElementById("resposta").innerText = periodoSelecionado
    if(periodoSelecionado == "d"){
        document.getElementById("resposta").innerText = "Manhã ☀️"
        document.body.style.backgroundColor = "#faef28"
        document.body.style.color = "#2302ff"
        document.getElementById("foto").src="imagens/manha.gif"

    }else if(periodoSelecionado == "t"){
        document.getElementById("resposta").innerText = "Tarde ⛅"
        document.body.style.backgroundColor = "#2875fa"
        document.body.style.color = "#d7d2fd"
        document.getElementById("foto").src="imagens/tarde.webp"

    }else if(periodoSelecionado == "n"){
        document.getElementById("resposta").innerText = "Noite 🌙"
        document.body.style.backgroundColor = "#3f4859"
        document.body.style.color = "#d6d1ff"
        document.getElementById("foto").src="imagens/noite.gif"
    }
    else{
        document.getElementById("resposta").innerText = ""
        document.body.style.backgroundColor = "#959cf8"
        document.body.style.color = "#294048"
        document.getElementById("foto").src="imagens/original.webp"
        
    }

}