function mostrarCuriosidade() {
    const curiosidades = [
        "O Brasil é um dos maiores exportadores de soja do mundo.",
        "O agronegócio responde por uma parcela importante das exportações brasileiras.",
        "A agricultura de precisão utiliza drones e sensores para aumentar a produtividade.",
        "O Brasil é líder mundial na produção e exportação de café.",
        "Tecnologias sustentáveis estão transformando o campo brasileiro."
    ];

    const indice = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").textContent =
        curiosidades[indice];
}