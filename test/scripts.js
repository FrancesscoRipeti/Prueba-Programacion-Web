

// Variables del carrito y elementos de la tienda
const carrito = document.getElementById('contenido-carrito-des');
const elementos1 = document.getElementById('lista1');
const lista = document.querySelector('#lista-del-carrito tbody');
const vaciarCarrito = document.querySelector('.vaciar-carro');

// Cargar los event listeners
cargarEventListener();

function cargarEventListener() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarrito.addEventListener('click', vaciarCarritoTotal);
}

// Función para añadir elemento al carrito
function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

// Función para leer los datos del elemento seleccionado
function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

// Función para insertar el elemento en el carrito
function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 height=150px >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar-elemento" data-id="${elemento.id}">X</a>
        </td>
    `;
    lista.appendChild(row);
}

// Función para eliminar un elemento del carrito
function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-elemento')) {
        e.target.parentElement.parentElement.remove();
    }
}

// Función para vaciar todo el carrito
function vaciarCarritoTotal() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
