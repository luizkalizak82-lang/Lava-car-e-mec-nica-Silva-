// 1. LÓGICA DE AGENDAMENTO VIA WHATSAPP
function agendarServico(servico) {
    const telefone = "5547991517931"; // Seu número configurado
    const mensagem = `Olá! Vi o site da Mecânica Silva e gostaria de agendar uma revisão para: ${servico}.`;
    
    // Codifica a mensagem para o formato de URL
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');
}

// 2. TORNAR OS CARDS DE SERVIÇO CLICÁVEIS
// Isso permite que o cliente clique no card e já inicie o agendamento
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-servico');
    
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const nomeServico = card.querySelector('h3').innerText;
            agendarServico(nomeServico);
        });
    });
});

// 3. EFEITO DE REVELAÇÃO (REVEAL) AO ROLAR A PÁGINA
// Faz com que os itens apareçam suavemente conforme o usuário desce o site
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Configuração inicial para o efeito de revelação
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
});

// 4. LOG DE SISTEMA (OPCIONAL - ESTILO HARDWARE)
console.log("SISTEMA MECÂNICA SILVA: ONLINE");
console.log("LOCALIZAÇÃO: ITAPEMA - SC");
