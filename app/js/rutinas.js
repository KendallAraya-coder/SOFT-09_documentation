// Función para abrir modal de nueva rutina
function abrirModalNuevaRutina() {
    const modal = document.getElementById('modalNuevaRutina');
    modal.classList.add('active');
}

// Función para cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modalNuevaRutina');
    modal.classList.remove('active');
}

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
    const modal = document.getElementById('modalNuevaRutina');
    if (event.target === modal) {
        cerrarModal();
    }
}

// Función para ver detalle de rutina
function verDetalle(id) {
    alert(`Ver detalle de rutina ${id} - Próximamente implementado`);
    // Aquí irá la navegación a rutina-detalle.html
}

// Filtros
document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('.filtro-btn');
    const cards = document.querySelectorAll('.rutina-card');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            // Remover active de todos
            filtros.forEach(f => f.classList.remove('active'));
            // Agregar active al clickeado
            this.classList.add('active');
            
            const categoria = this.dataset.filtro;
            
            cards.forEach(card => {
                if (categoria === 'todas') {
                    card.style.display = 'block';
                } else {
                    if (card.dataset.categoria === categoria) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Selector de íconos
    const iconOptions = document.querySelectorAll('.icon-option');
    iconOptions.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            iconOptions.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Agregar actividad
    const btnAddActividad = document.querySelector('.btn-add-actividad');
    if (btnAddActividad) {
        btnAddActividad.addEventListener('click', function() {
            const actividadesList = document.querySelector('.actividades-list');
            const newActividad = document.createElement('div');
            newActividad.className = 'actividad-item';
            newActividad.innerHTML = `
                <i class="fas fa-grip-vertical"></i>
                <input type="text" placeholder="Nombre de la actividad">
                <button type="button" class="btn-icon" onclick="this.parentElement.remove()">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            actividadesList.appendChild(newActividad);
        });
    }
    
    // Animación de entrada para las cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s';
        observer.observe(card);
    });
});