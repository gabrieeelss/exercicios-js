let filmes = [];

function fnSalvar() {
  let umFilme = {
    nome: document.getElementById("nomeFilme").value,
    foto: document.getElementById("fotoCapa").value,
    ano: document.getElementById("anoFilme").value,
    classificacao: document.getElementById("classificacaoFilme").value,
    trailer: document.getElementById("linkTrailer").value,
    genero: document.getElementById("generoFilme").value,
    duracao: document.getElementById("duracaoFilme").value,
    descricao: document.getElementById("descricaoFilme").value,
  };
  filmes.push(umFilme);

  console.dir(filmes);
}

function fnListar() {
  let dados = "";
  filmes.forEach(function (umFilme, i) {
    dados += `
        <div class="card" style="width: 18rem;">
        <img src="${umFilme.foto}" class="card-img-top" alt="${umFilme.nome}">
        <div class="card-body">
            <h5 class="card-title">${umFilme.nome} (${umFilme.ano})</h5>
            <p class="card-text">${umFilme.genero} - ${umFilme.classificacao} - ${umFilme.duracao} min</p>
            <p class="card-text">${umFilme.descricao}</p>
            <a href="${umFilme.trailer}" target="_blank" class="btn btn-primary">Assistir Trailer</a>
            <button type="button" onclick='fnExcluir(${i})' class="btn btn-danger">excluir</button>
        </div>
        </div>
        `;
  });
  document.getElementById(`listaDeFilmes`).innerHTML = dados;
}

function fnExcluir(indice) {
  filmes.splice(indice, 1);
  fnListar();
}
function fnLimpar() {
  document.getElementById("formulario").reset();
}
document.getElementById("btSalvar").addEventListener("click", function () {
  fnSalvar();
  fnListar();
  fnLimpar();
});
