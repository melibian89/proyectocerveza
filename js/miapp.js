  // Declaraciones
//--------------
Document.addEventListener('DOMContentLoaded', () => {

// Array de todos las cervezas
const Allcervezas =[heineken, stellaartois, corona, quilmes, patagonia, imperial, andes, brahama];
// Array del conjunto de cervezas
let carrito = [];
// Query de Elementos
//-------------------

const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;

// Funciones
function renderizarProductos() {
  Allcervezas.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = `${info.precio}${divisa}`;
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary');
      miNodoBoton.textContent = '+';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
  });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Actualizamos el carrito 
  renderizarCarrito();

}

/**
* productos guardados en el carrito
*/
function renderizarCarrito() {
  // Vaciamos todo el html
  DOMcarrito.textContent = '';
  // Borramos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Genero los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
      // Obtengo el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          
          return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          
          return itemId === item ? total += 1 : total;
      }, 0);
      // nodo del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
  });
  // Renderizamos el precio total en el HTML
  DOMtotal.textContent = calcularTotal();
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });
  // volvemos a renderizar
  renderizarCarrito();
}

/**
* Precio total 
*/
function calcularTotal() {
  // Recorremos el array del carrito 
  return carrito.reduce((total, item) => {
      // obtenemos su precio
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].precio;
  }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
  // Limpio los productos guardados
  carrito = [];
  // Renderizamos los cambios
  renderizarCarrito();
  // Borra LocalStorage
  localStorage.clear();

}

function guardarCarritoEnLocalStorage () {
  miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
  // ¿Existe un carrito previo guardado en LocalStorage?
  if (miLocalStorage.getItem('carrito') !== null) {
      // Carga la información
      carrito = JSON.parse(miLocalStorage.getItem('carrito'));
  }
}


 // Eventos

 DOMbotonVaciar.addEventListener('click', vaciarCarrito);

 // Inicio
 cargarCarritoDeLocalStorage();
 renderizarProductos();
 renderizarCarrito();
});
