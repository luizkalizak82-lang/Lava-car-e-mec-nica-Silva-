function abrirZap(servico) {
    const telefone = "5547991517931";
    const mensagem = encodeURIComponent(`Olá Mecânica Silva! Gostaria de agendar o serviço: ${servico}.`);
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const vagas = document.getElementById('vagas-count');
    // Gera 1 ou 2 vagas disponíveis para criar urgência
    vagas.innerText = Math.floor(Math.random() * 2) + 1;
});
