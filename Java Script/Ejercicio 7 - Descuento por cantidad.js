const carrito = [ 
  { nombre: 'Vaso', precio: 2000, cantidad: 10 }, 
  { nombre: 'Plato', precio: 5000, cantidad: 3 } 
];

const total = carrito.reduce((acumulador, producto) => {
  
const precio =producto.precio;
const cantidad = producto.cantidad;

const subtotal = precio * cantidad;
const descuento = subtotal * 0.15 * (cantidad > 5);

const subtotalConDescuento = subtotal - descuento;

const nuevoTotal = acumulador + subtotalConDescuento;
return nuevoTotal;

}, 0);

console.log(total);