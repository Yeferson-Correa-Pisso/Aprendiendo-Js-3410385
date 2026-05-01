const carrito = [
  { nombre: 'Arroz', precio: 4500, cantidad: 2 },
  { nombre: 'Aceite', precio: 12000, cantidad: 1 },
  { nombre: 'Leche', precio: 3800, cantidad: 3 }
];

const total = carrito.reduce ((acumulador, producto) => {
  const precio = producto.precio;
  const cantidad =producto.cantidad;

  const subtotal = precio * cantidad;
  const nuevoTotal = acumulador + subtotal;

  return nuevoTotal; 

}, 0);

  console.log(total)
