function fnCalcularMedia(){
    let vendedor = "", janeiro = 0, fevereiro = 0, marco = 0, media = 0

    vendedor = document.getElementById("vendedor").value
    janeiro = parseInt(document.getElementById("janeiro").value)
    fevereiro = parseInt(document.getElementById("fevereiro").value)
    marco = parseInt(document.getElementById("marco").value)
    media = (janeiro + fevereiro + marco) / 3
    alert("Seja bem vindo(a) " + vendedor + " a sua média foi de " + media)
    document.getElementById('media').innerText = media
}