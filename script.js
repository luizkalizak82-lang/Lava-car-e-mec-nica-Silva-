function abrirZap(servico) {
    const telefone = "5547991517931";
    const texto = `Olá Mecânica Silva! Vi que restam poucas vagas e quero agendar: ${servico}.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const vagasElement = document.getElementById('vagas-count');
    // Gera um número aleatório entre 1 e 3 para simular vagas reais
    vagasElement.innerText = Math.floor(Math.random() * 3) + 1;
});
