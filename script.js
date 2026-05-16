function abrirZap(servico) {
    const telefone = "5547991517931";
    const mensagem = encodeURIComponent(`Olá Mecânica Silva! Gostaria de agendar o serviço: ${servico}.`);
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

// Lógica para variar as vagas entre 1 e 2
document.addEventListener('DOMContentLoaded', () => {
    const vagas = document.getElementById('vagas-count');
    vagas.innerText = Math.floor(Math.random() * 2) + 1;
});
