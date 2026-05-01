const pedidoA = [{ id: 1, cantidad: 2 }, { id: 2, cantidad: 1 }];
const pedidoB = [{ id: 1, cantidad: 2 }, { id: 2, cantidad: 0 }];

const pedidoCompleto = (pedido) => {
  const resultado = pedido.every ((producto) => {

    const cantidad = producto.cantidad;

    const esValido = cantidad > 0;

    return esValido;

  });

  return resultado;
};
console.log(pedidoCompleto(pedidoA)); //true
console.log(pedidoCompleto(pedidoB)); //false