document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Animação dos Números de Impacto (Contador Progressivo) ---
    const stats = document.querySelectorAll('.stat-number');
    const statsSection = document.getElementById('dados');
    let animated = false; // Garante que a animação ocorra apenas uma vez

    const startCounters = () => {
        stats.forEach(stat => {
            const updateCount = () => {
                const target = parseInt(stat.getAttribute('data-target'));
                const count = parseInt(stat.innerText);
                
                // Velocidade do contador baseado no número alvo
                const increment = Math.ceil(target / 50); 

                if (count < target) {
                    stat.innerText = count + increment;
                    setTimeout(updateCount, 30);
                } else {
                    stat.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Dispara a animação apenas quando o usuário rolar a tela até a seção de dados
    const checkScroll = () => {
        if (!statsSection) return;
        
        const sectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition && !animated) {
            startCounters();
            animated = true;
        }
    };

    window.addEventListener('scroll', checkScroll);


    // --- 2. Validação e Feedback do Formulário ---
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            // Captura os dados inseridos (podem ser enviados para uma API no futuro)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Exibe mensagem de sucesso amigável
            formFeedback.textContent = `Obrigado, ${name}! Seu interesse por um futuro mais verde foi registrado. Entraremos em contato via: ${email}.`;
            formFeedback.className = "form-feedback success"; // Remove a classe hidden e adiciona o estilo de sucesso

            // Limpa o formulário
            contactForm.reset();

            // Desaparece com a mensagem após 5 segundos
            setTimeout(() => {
                formFeedback.className = "form-feedback hidden";
            }, 6000);
        });
    }

    // --- 3. Menu Mobile Simples ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            // Alterna a exibição do menu caso esteja no mobile
            if(navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.direction = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#ffffff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 10px rgba(0,0,