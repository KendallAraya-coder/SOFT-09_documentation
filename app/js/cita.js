
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const newAppointmentBtn = document.getElementById('new-appointment-btn');
    const appointmentModal = document.getElementById('appointment-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const cancelFormBtn = document.getElementById('cancel-form');
    const appointmentForm = document.getElementById('appointment-form');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const currentMonthEl = document.getElementById('current-month');
    
    // Fecha actual para el calendario
    let currentDate = new Date();
    
    // Funciones para abrir y cerrar el modal
    function openModal() {
        appointmentModal.style.display = 'flex';
    }
    
    function closeModal() {
        appointmentModal.style.display = 'none';
        appointmentForm.reset();
    }
    
    // Event listeners para el modal
    newAppointmentBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    cancelFormBtn.addEventListener('click', closeModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === appointmentModal) {
            closeModal();
        }
    });
    
    // Manejo del formulario
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar los datos del formulario
        alert('Cita agendada exitosamente (esto es una demostración)');
        closeModal();
    });
    
    // Funcionalidad básica del calendario
    function updateCalendar() {
        const options = { month: 'long', year: 'numeric' };
        currentMonthEl.textContent = currentDate.toLocaleDateString('es-ES', options);
    }
    
    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });
    
    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });
    
    // Inicializar el calendario
    updateCalendar();
    
    // Simulación de interacción con los días del calendario
    const days = document.querySelectorAll('.day:not(.empty)');
    days.forEach(day => {
        day.addEventListener('click', function() {
            // Aquí iría la lógica para mostrar disponibilidad del día seleccionado
            alert(`Has seleccionado el día ${this.textContent} de ${currentMonthEl.textContent}`);
        });
    });
    
    // Simulación de interacción con las citas existentes
    const modifyButtons = document.querySelectorAll('.appointment-actions .btn-secondary');
    const cancelButtons = document.querySelectorAll('.appointment-actions .btn-danger');
    
    modifyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Funcionalidad de modificar cita (esto es una demostración)');
        });
    });
    
    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas cancelar esta cita?')) {
                alert('Cita cancelada (esto es una demostración)');
            }
        });
    });
});