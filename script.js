// Tamanho inicial da fonte
let tamanhoFonte = 18;

// Alto contraste
document.getElementById("contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

// Aumentar fonte
document.getElementById("aumentar").addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

// Diminuir fonte
document.getElementById("diminuir").addEventListener("click", () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});

// Leitura da página
document.getElementById("ler").addEventListener("click", () => {
    speechSynthesis.cancel();

    const texto = document.querySelector("main").innerText;

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.rate = 1;

    speechSynthesis.speak(fala);
});