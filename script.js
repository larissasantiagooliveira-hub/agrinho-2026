document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Rolagem suave ao clicar no botão principal do topo
    const btnConhecer = document.getElementById('btn-conhecer');
    const secaoMissao = document.getElementById('missao');

    btnConhecer.addEventListener('click', () => {
        secaoMissao.scrollIntoView({ behavior: 'smooth' });
    });

    // 2. Lógica do Simulador Ecológico (Economia de Água)
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares-input');
    const containerResultado = document.getElementById('resultado-calculo');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação se o usuário deixou vazio ou digitou número negativo/zero
        if (isNaN(hectares) || hectares <= 0) {
            containerResultado.innerHTML = "⚠️ Por favor, insira uma quantidade de hectares válida (maior que zero).";
            containerResultado.className = ""; // Limpa classes de sucesso anteriores
            containerResultado.style.color = "#721c24";
            containerResultado.style.backgroundColor = "#f8d7da";
            containerResultado.style.border = "1px solid #f5c6cb";
            return;
        }

        // Regra de simulação: Cada hectare sob manejo tecnológico sustentável economiza cerca de 12.500 litros de água por safra
        const litrosEconomizados = hectares * 12500;
        
        // Formatação do número para o padrão de leitura brasileiro (ex: 1.250.000)
        const litrosFormatados = litrosEconomizados.toLocaleString('pt-BR');

        // Insere o resultado final na página
        containerResultado.innerHTML = `🌱 <strong>Impacto Gerado:</strong> Adotando o monitoramento inteligente em <strong>${hectares} hectares</strong>, a economia estimada é de até <strong>${litrosFormatados} litros</strong> de água nesta safra!`;
        
        // Remove estilos manuais de erro e adiciona a classe CSS de sucesso
        containerResultado.removeAttribute('style');
        containerResultado.className = "resultado-visivel";
    });
});