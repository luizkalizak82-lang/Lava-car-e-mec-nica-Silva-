function abrirZap(servico) {
    const telefone = "5547991517931";
    const texto = `Olá Mecânica Silva! Gostaria de agendar o seguinte serviço: ${servico}.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
    
    // Abre o WhatsApp numa nova aba
    window.open(url, '_blank');
}
