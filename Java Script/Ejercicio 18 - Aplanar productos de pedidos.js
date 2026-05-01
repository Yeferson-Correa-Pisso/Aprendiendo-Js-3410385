const pedidos = [ 
  { idPedido: 10, productos: [{ nombre: 'A' }, { nombre: 'B' }] }, 
  { idPedido: 11, productos: [{ nombre: 'C' }] } 
];

const productosPlanos = pedidos.reduce((acumulador, pedido) => {
  const productosDelPedido = pedido.productos;
  const nuevoArreglo = acumulador.concat (productosDelPedido);

  return nuevoArreglo;

}, []);

console.log(productosPlanos);