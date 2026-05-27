// Simple form validation for contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! (demo)');
            form.reset();
        });
    }
});