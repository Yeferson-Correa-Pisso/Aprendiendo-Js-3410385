const pedidos = [ 
  { id: 1, estado: 'pendiente' }, 
  { id: 2, estado: 'entregado' }, 
  { id: 3, estado: 'pendiente' }, 
  { id: 4, estado: 'cancelado' }, 
  { id: 5, estado: 'en_proceso' }, 
  { id: 6, estado: 'entregado' } 
];

const conteoPorEstado = pedidos.reduce((acumulador, pedido) => {
  const estado = pedido.estado;
  const cantidadActual = acumulador[estado] || 0;
  const nuevaCantidad = cantidadActual + 1;
  acumulador [estado] = nuevaCantidad;

  return acumulador;
}, {});

console.log(conteoPorEstado);