document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manejo del Formulario (Simulación)
    const form = document.getElementById('leadForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        // Simular envío
        btn.innerText = 'Enviando...';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            // Éxito visual (Neuromarketing: Feedback positivo inmediato)
            btn.innerHTML = '¡Solicitud Recibida! ✅';
            btn.style.backgroundColor = '#10B981'; // Verde solo para éxito momentáneo
            btn.style.borderColor = '#10B981';
            btn.style.opacity = '1';
            
            // Opcional: Redirigir a WhatsApp con mensaje prellenado
            const empresa = document.getElementById('empresa').value;
            const comuna = document.getElementById('comuna').value;
            const mensaje = `Hola, soy de ${empresa} (${comuna}). Quisiera solicitar un despacho piloto.`;
            
            // Esperar 1 segundo y abrir WhatsApp (opcional)
            setTimeout(() => {
                window.open(`https://wa.me/56900000000?text=${encodeURIComponent(mensaje)}`, '_blank');
                // Resetear form
                form.reset();
                // Volver botón a estado original
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                }, 2000);
            }, 1000);
            
        }, 1500);
    });
});