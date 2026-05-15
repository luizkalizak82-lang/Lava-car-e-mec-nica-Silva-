/**
 * Lógica de Agendamento da Mecânica Silva
 */

function agendar(servico) {
    // Definição do número de contacto (formato internacional sem caracteres especiais)
    const numeroTelefone = "5547991517931"; 
    
    // Criação da mensagem personalizada baseada no serviço clicado
    const mensagem = `Olá Mecânica Silva! Gostaria de agendar o serviço: ${servico}.`;
    
    // Codificação da mensagem para formato de URL (trata espaços e caracteres especiais)
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Construção do link final do WhatsApp
    const linkWhatsapp = `https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`;
    
    // Abre o link numa nova aba do navegador
    window.open(linkWhatsapp, '_blank');
}

// Garante que o script só rode após o carregamento do HTML
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema Mecânica Silva: Pronto para agendamentos.");
});
