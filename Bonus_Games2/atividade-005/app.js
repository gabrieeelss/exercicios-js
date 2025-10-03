document.getElementById('bt-calcular').addEventListener('click', function(){
    let salario = document.getElementById('salario').value
    let horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value)
    let cargaHoraria = document.getElementById('cargaHoraria').value
    let horasExtras = fnHorasExtras(salario, horasTrabalhadas, cargaHoraria)
    document.getElementById('resposta').innerHTML = fnFormatarMonetario(horasExtras)
})