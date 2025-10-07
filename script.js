// Inicializa iconos Lucide
lucide.createIcons();

// --- Menú móvil ---
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    // Cambiar ícono
    const icon = menuToggle.querySelector('i[data-lucide]');
    const isMenuOpen = mobileMenu.classList.contains('active');

    icon.innerHTML = '';
    const newIcon = isMenuOpen ? 'x' : 'menu';
    const iconElement = document.createElement('i');
    iconElement.setAttribute('data-lucide', newIcon);
    iconElement.className = 'w-6 h-6 text-text-light';
    icon.appendChild(iconElement);
    lucide.createIcons();
});

// --- Formulario de contacto ---
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    formMessage.textContent = 'Enviando...';
    formMessage.classList.remove('text-red-400', 'text-green-400');
    formMessage.classList.add('text-accent');

    setTimeout(() => {
        const name = document.getElementById('name').value;
        formMessage.textContent = `¡Gracias por tu mensaje, ${name}! Te responderé pronto.`;
        formMessage.classList.remove('text-accent');
        formMessage.classList.add('text-green-400');
        contactForm.reset();
    }, 1500);
});
