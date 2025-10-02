Document.getElementById('btcalcular').addEventListener('click', function(){
    let salario = Document.getelementById('salario').valeu
    let horastrabalhadas = parseFloat(Document.getElementById('horas-trabalhadas').valeu)
    let cargahoraria = Document.getElementByid('cargahoraria').valeu
    let horasextras = fnhorasextras(salario, horastrabalhadas, cargahoraria)
    Document.getElementById('resposta').innerhtml = fnFormatarMonetario(horasextras)
})