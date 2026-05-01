const compras = [50000, 125000, 250000, 450000, 180000];

const puntosPorCompra = compras.map((compra) => {
  const puntosBase = compra / 1000
  const factor = 1 + (compra >200000);

  const puntosFinales = puntosBase * factor;

  return puntosFinales;

});

console.log(puntosPorCompra)