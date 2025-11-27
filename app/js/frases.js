

// Variable global: array de frases
var frases = [];

// Cuando carga la página
window.onload = function() {
    cargarFrasesEjemplo();
    mostrarFrases();
};

// Cargar frases de ejemplo
function cargarFrasesEjemplo() {
    frases.push({
        texto: "La salud mental no es un destino, sino un proceso.",
        autor: "Noam Shpancer"
    });
    frases.push({
        texto: "No tienes que controlar tus pensamientos.",
        autor: "Dan Millman"
    });
    frases.push({
        texto: "Cuidar de ti mismo es esencial.",
        autor: "Anónimo"
    });
}

// Función para agregar una frase nueva
function agregarFrase() {
    var texto = document.getElementById('textoFrase').value;
    var autor = document.getElementById('autorFrase').value;
    
    if (texto == '' || texto.length < 3) {
        alert('Por favor escribe una frase');
        return;
    }
    
    var nuevaFrase = {
        texto: texto,
        autor: autor
    };
    
    frases.push(nuevaFrase);
    
    document.getElementById('textoFrase').value = '';
    document.getElementById('autorFrase').value = '';
    
    mostrarFrases();
}

// Función para eliminar una frase
function eliminarFrase(posicion) {
    var confirmacion = confirm('¿Eliminar esta frase?');
    
    if (confirmacion) {
        var nuevoArray = [];
        for (var i = 0; i < frases.length; i++) {
            if (i != posicion) {
                nuevoArray.push(frases[i]);
            }
        }
        frases = nuevoArray;
        mostrarFrases();
    }
}

// Función para mostrar todas las frases
function mostrarFrases() {
    var contenedor = document.getElementById('listaFrases');
    
    // Limpiar contenedor
    contenedor.innerHTML = '';
    
    // Si no hay frases
    if (frases.length == 0) {
        var mensaje = document.createElement('p');
        mensaje.className = 'mensaje-vacio';
        mensaje.textContent = 'No hay frases todavía. ¡Agrega una!';
        contenedor.appendChild(mensaje);
        return;
    }
    
    // Recorrer todas las frases
    for (var i = 0; i < frases.length; i++) {
        // Crear tarjeta
        var tarjeta = document.createElement('div');
        tarjeta.className = 'frase-card';
        
        // Crear texto de la frase
        var textoElemento = document.createElement('p');
        textoElemento.className = 'frase-texto';
        textoElemento.textContent = '"' + frases[i].texto + '"';
        tarjeta.appendChild(textoElemento);
        
        // Si tiene autor, agregarlo
        if (frases[i].autor != '') {
            var autorElemento = document.createElement('p');
            autorElemento.className = 'frase-autor';
            autorElemento.textContent = '— ' + frases[i].autor;
            tarjeta.appendChild(autorElemento);
        }
        
        // Crear botón eliminar
        var botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn-eliminar';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.setAttribute('data-posicion', i);
        
        // Evento del botón
        botonEliminar.onclick = function() {
            var pos = this.getAttribute('data-posicion');
            eliminarFrase(pos);
        };
        
        tarjeta.appendChild(botonEliminar);
        
        // Agregar tarjeta al contenedor
        contenedor.appendChild(tarjeta);
    }
}