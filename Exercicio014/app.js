const times = [
    "Atlético Mineiro",
    "Bahia",
    "Botafogo",
    "Ceará",
    "Corinthians",
    "Cruzeiro",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Mirassol",
    "Palmeiras",
    "Red Bull Bragantino",
    "Santos",
    "São Paulo",
    "Sport",
    "Vasco da Gama",
    "Vitória"
];

const mascoteTimes = [
    "Galo",               // Atlético Mineiro
    "Super-Homem Tricolor",// Bahia
    "Manequinho",           // Botafogo
    "Vovô",                // Ceará
    "Mosqueteiro",          // Corinthians
    "Raposa",              // Cruzeiro
    "Urubu",               // Flamengo
    "Pó de Arroz",         // Fluminense
    "Leão",                // Fortaleza
    "Mosqueteiro",         // Grêmio
    "Saci",                // Internacional
    "Periquito",           // Juventude
    "Leão",                // Mirassol
    "Porco",               // Palmeiras
    "Toro Loko",           // Red Bull Bragantino
    "Baleia",              // Santos
    "Soberano",           // São Paulo
    "Leão",                // Sport
    "Almirante",           // Vasco da Gama
    "Leão",                // Vitória
];

function fnListaTimes() {
    for (let i = 0; i < times.length; i++) {
        document.getElementById("lista_times").innerHTML += `
    <div class="col-6 border rounded text-center"> ${times[i]} - ${mascoteTimes[i]}`
    }
}
fnListaTimes()

console.dir(times)
console.dir(mascoteTimes)