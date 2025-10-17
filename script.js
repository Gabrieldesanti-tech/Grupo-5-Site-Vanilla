// script.js - VERSÃO SIMPLIFICADA E FUNCIONAL

console.log("✅ Script carregado!");

// ===== NAVEGAÇÃO ATIVA =====
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 DOM carregado!");
    
    // Ativar link da página atual
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // ===== FORMULÁRIO DE TRIAGEM =====
    const form = document.querySelector('form');
    if (form) {
        console.log("📋 Formulário encontrado!");
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("📤 Formulário enviado!");
            alert('Triagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
    }
    
    // ===== GALERIA =====
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        console.log(`🖼️ ${galleryItems.length} itens da galeria encontrados`);
        
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (img) {
                    // Modal simples
                    const modal = document.createElement('div');
                    modal.style.cssText = `
                        position: fixed;
                        top: 0; left: 0;
                        width: 100%; height: 100%;
                        background: rgba(0,0,0,0.8);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 1000;
                    `;
                    
                    const modalImg = document.createElement('img');
                    modalImg.src = img.src;
                    modalImg.style.maxWidth = '90%';
                    modalImg.style.maxHeight = '90%';
                    
                    modal.appendChild(modalImg);
                    modal.addEventListener('click', function() {
                        document.body.removeChild(modal);
                    });
                    
                    document.body.appendChild(modal);
                }
            });
        });
    }
    
    // ===== DEPOIMENTOS =====
    const testimonials = document.querySelector('.testimonials');
    if (testimonials) {
        console.log("💬 Seção de depoimentos encontrada");
        
    }
});

// ===== SCROLL SUAVE PARA LINKS INTERNOS =====
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ===== VALIDAÇÃO SIMPLES DE EMAIL =====
document.addEventListener('blur', function(e) {
    if (e.target.type === 'email' && e.target.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value)) {
            e.target.style.borderColor = 'red';
        } else {
            e.target.style.borderColor = '';
        }
    }
}, true);