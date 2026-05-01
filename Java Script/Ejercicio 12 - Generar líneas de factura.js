const carrito = [ 
  { nombre: 'Pan', precio: 3000, cantidad: 2 }, 
  { nombre: 'Queso', precio: 8500, cantidad: 1 } 
];

const lineasFactura = carrito.map ((producto) => {
  const nombre = producto.nombre;
  const precio = producto.precio;
  const cantidad = producto.cantidad;

  const subtotal = precio * cantidad;

  const linea = `${nombre} x ${cantidad} = ${subtotal}`;

  return linea;

});

console.log(lineasFactura);