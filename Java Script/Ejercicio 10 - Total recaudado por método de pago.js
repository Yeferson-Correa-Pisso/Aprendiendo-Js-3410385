const pagos = [ 
  { metodo: 'tarjeta', monto: 50000 }, 
  { metodo: 'efectivo', monto: 20000 }, 
  { metodo: 'tarjeta', monto: 75000 }, 
  { metodo: 'pse', monto: 100000 }, 
  { metodo: 'efectivo', monto: 15000 } 
];

const totalPorMetodo = pagos.reduce((acumulador, pago) => {
  const metodo = pago.metodo;
  const monto = pago.monto;

  const valorActual = acumulador [metodo] || 0;
  const nuevoValor = valorActual + monto;

  acumulador [metodo] = nuevoValor;

  return acumulador;
}, {});

console.log(totalPorMetodo);