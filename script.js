function agendar(servico) {
    const numero = "5547991517931";
    const texto = encodeURIComponent(`Olá Mecânica Silva! Gostaria de agendar o serviço: ${servico}.`);
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
}
