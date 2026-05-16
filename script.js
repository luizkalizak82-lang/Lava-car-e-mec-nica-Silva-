function abrirZap(servico) {
    const telefone = "5547991517931";
    const texto = encodeURIComponent(`Olá Mecânica Silva! Quero agendar o serviço: ${servico}`);
    window.open(`https://wa.me/${telefone}?text=${texto}`, '_blank');
}
